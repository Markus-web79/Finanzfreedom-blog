import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import categoryConfig from '../../config/categoryConfig';

export default function ArticlePage({ frontmatter, content, categoryData }) {
  return (
    <div style={{ padding: "2rem" }}>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </header>

      <article dangerouslySetInnerHTML={{ __html: marked(content) }} />

      <br />
      <a href={`/category/${categoryData.slug}`}>
        Zurück zu {categoryData.label}
      </a>
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
        const slug = file.replace(".md", "");
        paths.push({
          params: {
            category: cat,
            slug: slug,
          },
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
  const category = params.category;
  const slug = params.slug;
  const categoryData = CATEGORY_CONFIG[category];

  const filePath = path.join(process.cwd(), "content", category, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: data,
      content,
      categoryData,
    },
  };
}
