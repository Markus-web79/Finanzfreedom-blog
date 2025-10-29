import { getPostBySlug, getAllPosts } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';

export default function Post({ post }) {
  if (!post) return <p>Fehler: Artikel nicht gefunden.</p>;

  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ]);

  if (!post) {
    return { notFound: true };
  }

  const content = await markdownToHtml(post.content || '');

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
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
}
