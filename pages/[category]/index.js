import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/CategoryPage.module.css";

export async function getStaticPaths() {
  const categoriesFile = path.join(process.cwd(), "config", "categories.json");
  const categories = JSON.parse(fs.readFileSync(categoriesFile, "utf8"));

  return {
    paths: Object.keys(categories).map((slug) => ({
      params: { category: slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  const configFile = path.join(process.cwd(), "config", "categories.json");
  const categories = JSON.parse(fs.readFileSync(configFile, "utf8"));

  const categoryConfig = categories[category];

  const folder = path.join(process.cwd(), "content", category);
  let articles = [];

  if (fs.existsSync(folder)) {
    const files = fs.readdirSync(folder).filter((f) => f.endsWith(".md"));

    articles = files.map((file) => {
      const fullPath = path.join(folder, file);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);

      return {
        slug: data.slug || file.replace(".md", ""),
        title: data.title,
        description: data.description || "",
        date: data.date || null,
        readingTime: Math.ceil(content.split(" ").length / 200),
      };
    });
  }

  return {
    props: {
      category,
      articles,
      config: categoryConfig,
    },
  };
}
