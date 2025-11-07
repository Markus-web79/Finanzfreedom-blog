import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (err) {
        console.error("Fehler beim Laden der Kategorien:", err);
      }
    }
    fetchCategories();
  }, []);

  return (
    <header
      style={{
        background: "#0f2027",
        borderBottom: "2px solid #00bfa5",
        padding: "1rem 0",
        marginBottom: "2rem",
      }}
    >
      <nav
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          color: "white",
        }}
      >
        <Link href="/" style={{ color: "#00bfa5", fontSize: "1.4rem" }}>
          <strong>FinanzFreedom</strong>
        </Link>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/${cat}`}
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
                borderBottom: "1px solid transparent",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderBottom = "1px solid #00bfa5")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.borderBottom = "1px solid transparent")
              }
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
