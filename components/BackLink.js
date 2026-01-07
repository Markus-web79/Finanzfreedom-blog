import Link from "next/link";

export default function BackLink({ href, label }) {
  if (!href) return null;

  return (
    <div style={{ marginBottom: "24px" }}>
      <Link href={href} style={{ color: "#4fd1c5", fontSize: "0.95rem" }}>
        ← {label}
      </Link>
    </div>
  );
}
