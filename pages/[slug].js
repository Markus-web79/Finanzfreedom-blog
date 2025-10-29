import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import Head from "next/head";

export default function Post({ post }) {
  if (!post) {
    return <div>Artikel nicht gefunden.</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | FinanzFreedom</title>
        <meta name="description" content={post.description || post.excerpt} />
      </Head>

      <main className="article-page">
        <article>
          <h1>{post.title}</h1>
          <p className="article-date">{post.date}</p>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "description",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug.replace(".md", ""),
      },
    })),
    fallback: false,
  };
}
