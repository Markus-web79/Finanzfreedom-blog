import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import ArticleLayout from "../../components/ArticleLayout";

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
    <ArticleLayout title={post.title}>
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </ArticleLayout>
  );
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

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
