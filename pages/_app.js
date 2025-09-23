// pages/_app.js
import "../styles/globals.css";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Funktion, um alle Artikel-Slugs zu laden
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "Unbenannter Artikel",
    };
  });
}

function MyApp({ Component, pageProps }) {
  const posts = getAllPosts();

  return (
    <>
      {/* Header mit Navigation */}
      <header
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#f4f4f4",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h1>📈 FinanzFreedom Blog</h1>
        <p>Automatisch generierte Artikel über Finanzen & passives Einkommen</p>

        {/* Dynamische Navigation */}
        <nav style={{ marginTop: "15px" }}>
          <Link href="/" style={{ margin: "0 15px", fontWeight: "bold" }}>
            🏠 Startseite
          </Link>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/pages/${post.slug}`}
              style={{ margin: "0 15px" }}
            >
              {post.title}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hauptbereich */}
      <main style={{ maxWidth: "800px", margin: "20px auto", padding: "0 20px" }}>
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#f4f4f4",
          borderTop: "1px solid #ddd",
          marginTop: "40px",
        }}
      >
        <p>© {new Date().getFullYear()} FinanzFreedom Blog – Alle Rechte vorbehalten</p>
      </footer>
    </>
  );
}

export default MyApp;
