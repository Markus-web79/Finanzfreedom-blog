import { getAllPosts, getPostBySlug } from "../lib/posts";

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}
