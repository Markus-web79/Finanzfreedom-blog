import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentRoot = path.join(process.cwd(), "content");

function getAllMarkdownFiles(dir) {
  let files = [];

  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      files = files.concat(getAllMarkdownFiles(full));
    } else if (file.endsWith(".md")) {
      files.push(full);
    }
  }

  return files;
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getUniqueSlug(baseSlug, usedSlugs) {
  let slug = baseSlug;
  let counter = 1;
  while (usedSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  usedSlugs.add(slug);
  return slug;
}

function fixSlugs() {
  console.log("🔍 Scanning content/ for markdown files…");

  const files = getAllMarkdownFiles(contentRoot);
  const usedSlugs = new Set();

  for (const filePath of files) {
    const file = fs.readFileSync(filePath, "utf8");
    const parsed = matter(file);

    let title = parsed.data.title || path.basename(filePath, ".md");
    let baseSlug = slugify(parsed.data.slug || title);

    let newSlug = getUniqueSlug(baseSlug, usedSlugs);

    if (parsed.data.slug !== newSlug) {
      console.log(`⚠️ Fixing slug in: ${filePath}`);
      parsed.data.slug = newSlug;

      const newContent = matter.stringify(parsed.content, parsed.data);
      fs.writeFileSync(filePath, newContent, "utf8");
    }
  }

  console.log("✅ All slugs normalized and duplicates resolved!");
}

fixSlugs();
