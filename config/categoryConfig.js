import fs from 'fs';
import path from 'path';

export function getCategories() {
  const contentDir = path.join(process.cwd(), 'content');
  const items = fs.readdirSync(contentDir, { withFileTypes: true });

  return items
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
      slug: dirent.name,
      title: dirent.name
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
    }));
}
