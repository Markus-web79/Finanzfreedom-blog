import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import { Post } from "../../lib/types";

type Props = {
  posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
      <h1>Blog</h1>
      {posts.map(post => (
        <article key={post.slug}>
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    posts: getAllPosts(),
  },
});
