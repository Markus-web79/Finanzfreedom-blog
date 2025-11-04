import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentRoot = path.join(process.cwd(), 'content');

// Alle .md-Dateien (rekursiv) einsammeln
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(walk(p));
    else if (e.isFile() && e.name.endsWith('.md') && !e.name.startsWith('.')) files.push(p);
  }
  return files;
}

// Basename ohne .md -> damit URLs ein Segment bleiben (flache Slugs)
function toBaseSlug(filePath) {
  return path.basename(filePath).replace(/\.md$/, '');
}

export function getPostSlugs() {
  return walk(contentRoot).map(toBaseSlug);
}

// Datei zu einem Basename-Slug finden (egal in welchem Unterordner)
function resolveFileByBaseSlug(slug) {
  const files = walk(contentRoot);
  const match = files.find((fp) => toBaseSlug(fp) === slug);
  if (!match) throw new Error(`Post not found for slug: ${slug}`);
  return match;
}

export function getPostBySlug(slug, fields = []) {
  const fullPath = resolveFileByBaseSlug(slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const item = {};
  fields.forEach((field) => {
    if (field === 'slug') item.slug = slug;                       // flache URL
    else if (field === 'content') item.content = content;
    else if (data && Object.prototype.hasOwnProperty.call(data, field)) item[field] = data[field];
  });

  // Fallbacks
  if (!item.title && data?.title) item.title = data.title;
  if (!item.date && data?.date) item.date = data.date;
  if (!item.description && data?.description) item.description = data.description;

  return item;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((s) => getPostBySlug(s, fields));
  // Nach Datum absteigend, falls vorhanden
  posts.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });
  return posts;
}
