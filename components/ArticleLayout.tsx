type ArticleLayoutProps = {
  title: string;
  excerpt?: string;
  category?: string;
  content: React.ReactNode;
};

export default function ArticleLayout({
  title,
  excerpt,
  category,
  content,
}: ArticleLayoutProps) {
  return (
    <article style={{ maxWidth: 800, margin: "0 auto", padding: "2.5rem 1rem" }}>
      <header style={{ marginBottom: "2rem" }}>
        {category && (
          <div style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "0.5rem" }}>
            {category.toUpperCase()}
          </div>
        )}

        <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
          {title}
        </h1>

        {excerpt && (
          <p style={{ fontSize: "1.1rem", opacity: 0.85 }}>
            {excerpt}
          </p>
        )}
      </header>

      <section style={{ lineHeight: 1.7, fontSize: "1.05rem" }}>
        {content}
      </section>
    </article>
  );
}
