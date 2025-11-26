import CATEGORY_CONFIG from "../../config/categoryConfig.js";
import Link from "next/link";

export default function CategoriesOverview() {
  // Kategorien sortiert nach Label
  const categories = Object.values(CATEGORY_CONFIG).sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Kategorien</h1>
      <p>Wähle einen Themenbereich aus:</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/kategorie/${cat.slug}`}>
            <div
              style={{
                border: "1px solid #1e1e1e",
                padding: "1.5rem",
                borderRadius: "12px",
                background: "#111",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <h2 style={{ marginBottom: "0.5rem", color: "#00e0b5" }}>
                {cat.label}
              </h2>
              <p style={{ opacity: 0.8 }}>{cat.heroSubtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
