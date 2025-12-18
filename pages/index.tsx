import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>TEST</h1>

      <Link href="/blog">
        <a
          style={{
            display: "block",
            padding: "20px",
            background: "#0f172a",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          👉 ZUM BLOG
        </a>
      </Link>
    </main>
  );
}
