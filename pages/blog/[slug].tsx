import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, Post } from "../../lib/getAllPosts";

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <main>
      <h1>{post.title}</h1>
      <article>{post.content}</article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};
