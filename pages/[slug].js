import { getAllPosts, getPostBySlug } from "../lib/getAllPosts";

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
  };
}

export default function Post({ post }) {
  if (!post) {
    return <h1>Artikel nicht gefunden</h1>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}
