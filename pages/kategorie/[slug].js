import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CATEGORY_CONFIG from "../../config/categoryConfig";

export default function CategoryPage({ category, articles }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{category.label}</h1>
      <p>{category.heroSubtitle}</p>

      <ul>
        {articles.map((a) => (
          <li key={a.slug}>
            <a href={`/kategorie/${a.slug}`}>
              {a.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Object.values(CATEGORY_CONFIG).map((cat) => ({
    params: { slug: cat.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = CATEGORY_CONFIG[params.slug];
  const folder = path.join(process.cwd(), "content", category.slug);

  const articles = fs
    .readdirSync(folder)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(folder, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug: file.replace(".md", ""),
        title: data.title || file.replace(".md", "")
      };
    });

  return {
    props: { category, articles }
  };
}
