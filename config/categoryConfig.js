import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Ordner, die NICHT als Kategorie erscheinen dürfen
const EXCLUDED_FOLDERS = [
  "content_backup",
  "content_flat_backup",
  "investieren_backup_phase6",
  "dummy",
  "test",
];

export function getCategories() {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        !EXCLUDED_FOLDERS.includes(dirent.name)
    )
    .map((dirent) => {
      const slug = dirent.name;

      return {
        slug,
        title: slug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        path: `/${slug}`,
      };
    });
}
