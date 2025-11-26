import CATEGORY_CONFIG from "../../config/categoryConfig.js";
import Link from "next/link";

export default function CategoriesOverview() {
  const categories = Object.values(CATEGORY_CONFIG);

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
          <Link
            key={cat.slug}
            href={`/kategorie/${cat.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid #1e293b",
                padding: "1.5rem",
                borderRadius: "12px",
                background: "#020617",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.7)",
                cursor: "pointer",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
              }}
            >
              <h2 style={{ marginBottom: "0.5rem", color: "#00e0b5" }}>
                {cat.label}
              </h2>
              <p style={{ opacity: 0.8, color: "#e2e8f0" }}>
                {cat.heroSubtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
