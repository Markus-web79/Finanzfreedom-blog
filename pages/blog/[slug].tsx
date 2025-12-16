import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import ArticleLayout from "../../components/ArticleLayout";
import ReactMarkdown from "react-markdown";

type PostProps = {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    content: string;
  };
};

export default function BlogPost({ post }: PostProps) {
  return (
    <ArticleLayout
      title={post.title}
      excerpt={post.excerpt}
      category={post.category}
    >
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </ArticleLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
};
