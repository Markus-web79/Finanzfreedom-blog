import Link from "next/link";
import { getAllPosts } from "../../lib/getAllPosts";

export default function CategoryPage({ posts, category }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>
        Kategorie: {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>

      {posts.length === 0 && <p>Keine Artikel in dieser Kategorie gefunden.</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.slug}
            style={{
              padding: "15px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.description?.slice(0, 150) || "Kein Beschreibungstext."}</p>

            <Link href={`/${post.category}/${post.slug}`}>
              Weiterlesen →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticPaths() {
  const allPosts = getAllPosts();
  const categories = [...new Set(allPosts.map((post) => post.category))];

  const paths = categories.map((cat) => ({
    params: { category: cat },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const allPosts = getAllPosts();
  const filtered = allPosts.filter((post) => post.category === params.category);

  return {
    props: {
      posts: filtered,
      category: params.category,
    },
  };
}
