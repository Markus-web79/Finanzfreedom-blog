import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Freiheit</title>
        <meta name="description" content="Lerne investieren, sparen und dein Geld verstehen. FinanzFreedom zeigt dir den Weg." />
      </Head>
      <main className="home-container">
        <h1>FinanzFreedom Blog</h1>
        <p className="intro">Finde ehrliche Finanzvergleiche, ETF-Guides und Tipps für dein Geld.</p>
        <div className="articles-grid">
          {posts.map((post) => (
            <article key={post.slug} className="article-card">
              <h2><Link href={`/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
              <small>{post.date}</small>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'slug', 'date', 'description'])
  return {
    props: { posts },
  }
}
