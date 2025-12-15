import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";

type Post = {
  slug: string;
  title: string;
  content: string;
};

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });

  const paths = entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => ({
      params: { slug: e.name.replace(/\.md$/, "") },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  return {
    props: {
      post: {
        slug,
        title: data.title ?? slug,
        content,
      },
    },
  };
};
