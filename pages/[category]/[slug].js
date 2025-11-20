import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import CATEGORY_CONFIG from "../../../config/categoriesConfig";

export default function ArticlePage({ frontmatter, content, categoryData }) {
  return (
    <div style={{ padding: "2rem" }}>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </header>

      <article dangerouslySetInnerHTML={{ __html: marked(content) }} />

      <br />
      <a href={`/${categoryData.slug}`}>← Zurück zu {categoryData.label}</a>
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];

  const categories = Object.keys(CATEGORY_CONFIG);

  categories.forEach((cat) => {
    const contentDir = path.join(process.cwd(), "content", cat);

    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);

      files.forEach((file) => {
        paths.push({
          params: { category: cat, slug: file.replace(".md", "") }
        });
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category, slug } = params;

  const categoryData = CATEGORY_CONFIG[category];

  const articlePath = path.join(
    process.cwd(),
    "content",
    category,
    `${slug}.md`
  );

  const fileContent = fs.readFileSync(articlePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  return {
    props: {
      frontmatter,
      content,
      categoryData,
    },
  };
}
