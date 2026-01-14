import Link from "next/link";

export default function Card({ href, icon, title, text, disabled }) {
  const baseStyle = {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "26px",
    minHeight: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.2s ease",
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    color: "#e5e7eb",
    textDecoration: "none",
  };

  const content = (
    <>
      <div>
        <div style={{ fontSize: "2.2rem", marginBottom: "14px" }}>{icon}</div>
        <h3 style={{ fontSize: "1.25rem", marginBottom: "8px" }}>{title}</h3>
        <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>{text}</p>
      </div>
      <div style={{ marginTop: "18px", color: "#14b8a6" }}>
        {disabled ? "Demnächst" : "Zum Artikel →"}
      </div>
    </>
  );

  if (disabled) return <div style={baseStyle}>{content}</div>;

  return (
    <Link href={href} style={baseStyle}>
      {content}
    </Link>
  );
}
