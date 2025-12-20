export function getAllPosts() {
  const files = fs.readdirSync(CONTENT_DIR);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, ""); // 🔴 KEIN blog/ mehr
      const fullPath = path.join(CONTENT_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        category: data.category ?? "",
      };
    });
}
