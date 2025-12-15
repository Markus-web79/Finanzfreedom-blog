import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts";
import type { Post } from "../../lib/types";

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "2rem" }}>
            <h2>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
