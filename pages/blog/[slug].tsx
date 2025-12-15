import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import type { Post } from "../../lib/types";
import { renderAffiliates } from "../../lib/renderAffiliate";

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`${post.title} – einfach & verständlich erklärt`}
        />
      </Head>

      <main
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "32px 16px",
          lineHeight: 1.7,
        }}
      >
        <h1>{post.title}</h1>

        <article
          dangerouslySetInnerHTML={{
            __html: renderAffiliates(post.content),
          }}
        />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
};
