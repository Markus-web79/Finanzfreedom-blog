import CATEGORY_CONFIG from "../../config/categoryConfig";

export default function KategorieOverview() {
  const categories = Object.values(CATEGORY_CONFIG);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Kategorien</h1>
      <p>Wähle eine Kategorie aus:</p>

      <ul>
        {categories.map(cat => (
          <li key={cat.slug}>
            <a href={`/kategorie/${cat.slug}`}>{cat.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
