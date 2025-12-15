// pages/index.tsx
import { getAllPosts, Post } from "../lib/posts";

type Props = {
  posts: Post[];
};

export default function Home({ posts }: Props) {
  return (
    <main>
      <h1>FinanzFreedom</h1>

      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
