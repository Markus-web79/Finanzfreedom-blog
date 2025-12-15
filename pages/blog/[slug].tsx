import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import { Post } from "../../lib/types";

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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map(post => ({
    params: { slug: post.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string);
  if (!post) return { notFound: true };
  return { props: { post } };
};
