import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), "content/investieren");

  const files = fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"));

  const paths = files.map((file) => ({
    params: {
      slug: [file.replace(".md", "")],
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug[0];

  const filePath = path.join(
    process.cwd(),
    "content/investieren",
    `${slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    props: {
      frontmatter: {
        title: data.title || "",
        description: data.description || "",
        category: data.category || "",
        date: data.date ? String(data.date) : "",
      },
      content,
    },
  };
}

export default function Article({ frontmatter, content }) {
  return (
    <main style={styles.page}>
      <article style={styles.article}>
        <h1 style={styles.title}>{frontmatter.title}</h1>

        {frontmatter.description && (
          <p style={styles.description}>{frontmatter.description}</p>
        )}

        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  article: {
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.7,
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "20px",
    color: "#ffffff",
  },
  description: {
    opacity: 0.8,
    marginBottom: "30px",
  },
};
