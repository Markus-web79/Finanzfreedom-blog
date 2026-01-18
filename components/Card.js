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
    minHeight: "240px",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

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
      <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
        {icon}
      </div>

      {/* TITLE – HIER IST DER FIX */}
      <h3
        style={{
          fontSize: "1.05rem",
          marginBottom: "8px",
          lineHeight: 1.3,

          maxWidth: "100%",
          boxSizing: "border-box",

          overflow: "hidden",
          textOverflow: "ellipsis",

          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",

          wordBreak: "break-all",        // 🔥 WICHTIG
          overflowWrap: "anywhere",      // 🔥 WICHTIG
        }}
      >
        {title}
      </h3>

      {/* TEXT */}
      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.6,
          opacity: 0.85,

          maxWidth: "100%",
          overflowWrap: "anywhere",
          wordBreak: "break-word",
        }}
      >
        {text}
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: "auto",
          color: "#14b8a6",
          fontWeight: 500,
          marginTop: "20px",
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
