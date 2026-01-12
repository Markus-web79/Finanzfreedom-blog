import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getCategories() {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        !dirent.name.includes("backup") &&
        !dirent.name.includes("_phase") &&
        !dirent.name.startsWith(".")
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
