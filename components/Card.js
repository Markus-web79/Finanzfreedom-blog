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

    color: "#e5e7eb",
    textDecoration: "none",

    transition: "transform 0.15s ease, border-color 0.15s ease",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.45 : 1,

    overflow: "hidden", // 🔑 GANZ WICHTIG
  };

  const hoverStyle = !disabled
    ? {
        transform: "translateY(-4px)",
        borderColor: "#14b8a6",
      }
    : {};

  return (
    <Link
      href={disabled ? "#" : href}
      style={baseStyle}
      onMouseEnter={(e) =>
        !disabled && Object.assign(e.currentTarget.style, hoverStyle)
      }
      onMouseLeave={(e) =>
        !disabled && Object.assign(e.currentTarget.style, baseStyle)
      }
    >
      {/* Icon */}
      <div style={{ fontSize: "2.2rem", marginBottom: "14px" }}>
        {icon}
      </div>

      {/* TITEL – HIER WAR DER FEHLER */}
      <h3
        style={{
          fontSize: "1.15rem",
          marginBottom: "8px",
          lineHeight: 1.3,

          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",

          wordBreak: "break-word",
          hyphens: "auto",
        }}
      >
        {title}
      </h3>

      {/* Text */}
      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: 1.6,
          opacity: 0.85,

          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",

          wordBreak: "break-word",
          hyphens: "auto",
        }}
      >
        {text}
      </p>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          color: "#14b8a6",
          fontWeight: 500,
        }}
      >
        {disabled ? "Demnächst" : "→ Zum Artikel"}
      </div>
    </Link>
  );
}
