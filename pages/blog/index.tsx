import Link from "next/link";
import { getAllPosts, PostMeta } from "../../lib/posts";

type Props = {
  posts: PostMeta[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "1rem" }}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
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
