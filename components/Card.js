import Link from "next/link";

export default function Card({
  href,
  icon,
  title,
  text,
  disabled = false,
}) {
  const baseStyle = {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "28px",
    height: "100%",              // 🔥 wichtig
    minHeight: "260px",

    display: "flex",
    flexDirection: "column",

    color: "#e5e7eb",
    textDecoration: "none",

    transition: "transform 0.15s ease, border-color 0.15s ease",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.45 : 1,

    boxSizing: "border-box",
    overflow: "hidden",
  };

  const hoverStyle = !disabled
    ? {
        transform: "translateY(-4px)",
        borderColor: "#14b8a6",
      }
    : {};

  const content = (
    <>
      {/* Icon */}
      <div style={{ fontSize: "2rem", marginBottom: "12px" }}>
        {icon}
      </div>

      {/* TITLE – HART BEGRENZT */}
      <h3
        style={{
          fontSize: "1.05rem",
          lineHeight: 1.25,
          marginBottom: "6px",

          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",

          wordBreak: "break-word",
          overflowWrap: "anywhere",
        }}
      >
        {title}
      </h3>

      {/* TEXT – DARF WACHSEN */}
      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.6,
          opacity: 0.85,
          marginBottom: "16px",
        }}
      >
        {text}
      </p>

      {/* CTA – immer unten */}
      <div
        style={{
          marginTop: "auto",
          color: "#14b8a6",
          fontWeight: 500,
        }}
      >
        {disabled ? "Demnächst" : "→ Zum Artikel"}
      </div>
    </>
  );

  if (disabled) {
    return <div style={baseStyle}>{content}</div>;
  }

  return (
    <Link
      href={href}
      style={baseStyle}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, hoverStyle)
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, baseStyle)
      }
    >
      {content}
    </Link>
  );
}
