import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content");
  const slugs: string[] = [];

  function walk(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith(".md")) {
        slugs.push(file.replace(/\.md$/, ""));
      }
    }
  }

  walk(contentDir);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const contentDir = path.join(process.cwd(), "content");
  let filePath: string | null = null;

  function findFile(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        findFile(fullPath);
      } else if (file === `${params.slug}.md`) {
        filePath = fullPath;
      }
    }
  }

  findFile(contentDir);

  if (!filePath) {
    return { notFound: true };
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    props: {
      title: data.title || params.slug,
      content,
    },
  };
}

export default function Article({ title, content }: any) {
  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: 20 }}>
      <h1>{title}</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{content}</pre>
    </main>
  );
}
