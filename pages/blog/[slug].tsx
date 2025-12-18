import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "../../lib/posts";

export default function BlogPost({ post }: any) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | FinanzFreedom</title>
        {post.excerpt && (
          <meta name="description" content={post.excerpt} />
        )}
      </Head>

      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <nav style={{ fontSize: "0.8rem", opacity: 0.7, marginBottom: "1.5rem" }}>
          <Link href="/">Start</Link> › <Link href="/blog">Blog</Link>
        </nav>

        <h1>{post.title}</h1>

        {post.excerpt && <p style={{ opacity: 0.8 }}>{post.excerpt}</p>}

        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{ marginTop: "2rem", lineHeight: 1.7 }}
        />

        <div style={{ marginTop: "3rem" }}>
          <Link href="/blog">← Zurück zum Blog</Link>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};
