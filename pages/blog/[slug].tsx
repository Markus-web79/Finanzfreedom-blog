import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "../../lib/getAllPosts";
import { markdownToHtml } from "../../lib/markdownToHtml";

export default function BlogPost({ post }: any) {
  return (
    <main>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post: any) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p: any) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};
