import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts } from "../../lib/getAllPosts";

type Post = {
  slug: string;
  title: string;
  description?: string;
  content: string;
};

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{post.title}</h1>

      {post.description && <p>{post.description}</p>}

      <article>
        <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
          {post.content}
        </pre>
      </article>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p: Post) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};
