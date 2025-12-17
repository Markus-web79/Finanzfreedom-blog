// components/CategoryNav.js
import Link from "next/link";

export default function CategoryNav({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <nav style={{ margin: "2rem 0", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/${cat.slug}`}
          style={{
            padding: "0.4rem 0.8rem",
            borderRadius: "6px",
            background: "#0f766e",
            color: "#fff",
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          {cat.title}
        </Link>
      ))}
    </nav>
  );
}
