// pages/blog/[slug].tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import ArticleLayout from "../../components/ArticleLayout";
import { remark } from "remark";
import html from "remark-html";

type Post = {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
};

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title} | FinanzFreedom</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Head>

      <ArticleLayout title={post.title}>
        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </ArticleLayout>
    </>
  );
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  return {
    paths: files.map((file) => ({
      params: { slug: file.replace(/\.md$/, "") },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const fullPath = path.join(CONTENT_DIR, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);

  return {
    props: {
      post: {
        slug,
        title: data.title ?? slug,
        excerpt:
          data.excerpt ??
          content.substring(0, 160).replace(/\n/g, " "),
        content: processed.toString(),
      },
    },
  };
};
