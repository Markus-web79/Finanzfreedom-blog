import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CATEGORY_CONFIG from "../../config/categoryConfig";

export default function KategorieDetail({ category, articles }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category.label}</h1>
      <p>{category.heroSubtitle}</p>

      <h2>Artikel</h2>
      {articles.length === 0 && <p>Keine Artikel vorhanden.</p>}

      <ul>
        {articles.map(a => (
          <li key={a.slug}>
            <a href={`/${category.slug}/${a.slug}`}>{a.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const categories = Object.values(CATEGORY_CONFIG);

  const paths = categories.map(c => ({
    params: { slug: c.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = CATEGORY_CONFIG[params.slug];

  const dir = path.join(process.cwd(), "content", params.slug);
  let articles = [];

  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);

    articles = files
      .filter(f => f.endsWith(".md"))
      .map(f => {
        const full = path.join(dir, f);
        const raw = fs.readFileSync(full, "utf8");
        const { data } = matter(raw);
        return {
          slug: data.slug,
          title: data.title || f.replace(".md", ""),
        };
      });
  }

  return {
    props: {
      category,
      articles,
    },
  };
}
