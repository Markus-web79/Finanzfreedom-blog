import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export function getAllPosts() {
  const categories = fs.readdirSync(contentDir).filter((file) =>
    fs.statSync(path.join(contentDir, file)).isDirectory()
  );

  let allPosts = [];

  categories.forEach((category) => {
    const categoryDir = path.join(contentDir, category);
    const files = fs.readdirSync(categoryDir);

    files.forEach((file) => {
      const filePath = path.join(categoryDir, file);
      const slug = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      allPosts.push({
        slug: `${category}/${slug}`,
        category,
        ...data,
      });
    });
  });

  // Sortiere nach Datum (neueste zuerst)
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return allPosts;
}
