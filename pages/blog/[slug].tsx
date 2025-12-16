import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import { remark } from "remark";
import html from "remark-html";
import ArticleLayout from "../../components/ArticleLayout";

type Post = {
  slug: string;
  title: string;
  contentHtml: string;
};

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <ArticleLayout title={post.title}>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </ArticleLayout>
  );
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(CONTENT_DIR);

  const paths = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
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

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  const processedContent = await remark()
    .use(html)
    .process(content);

  return {
    props: {
      post: {
        slug,
        title: data.title ?? slug,
        contentHtml: processedContent.toString(),
      },
    },
  };
};
