import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import type { Post } from "../../lib/types";

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
      <h1>{post.title}</h1>
      {post.description && (
        <p style={{ color: "#666" }}>{post.description}</p>
      )}

      <article
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
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

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
};
