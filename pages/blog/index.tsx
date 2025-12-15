import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";

type Post = {
  slug: string;
  title: string;
};

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export const getStaticProps: GetStaticProps<Props> = async () => {
  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });

  const posts = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(CONTENT_DIR, file.name);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(raw);

      return {
        slug: file.name.replace(/\.md$/, ""),
        title: data.title ?? file.name,
      };
    });

  return {
    props: {
      posts,
    },
  };
};
