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

    width: "100%",
    boxSizing: "border-box",
    minHeight: "240px",

    display: "flex",
    flexDirection: "column",

    color: "#e5e7eb",
    textDecoration: "none",

    transition: "transform 0.15s ease, border-color 0.15s ease",
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? "default" : "pointer",

    overflow: "hidden", // wichtig
  };

  const hoverStyle = !disabled
    ? {
        transform: "translateY(-4px)",
        borderColor: "#14b8a6",
      }
    : {};

  const textStyle = {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    opacity: 0.85,

    /* 🔑 DAS IST DER FIX */
    overflowWrap: "anywhere",
    wordBreak: "break-word",
    hyphens: "auto",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    marginBottom: "8px",

    overflowWrap: "anywhere",
    wordBreak: "break-word",
    hyphens: "auto",
  };

  const content = (
    <>
      {/* Inhalt oben */}
      <div>
        <div style={{ fontSize: "2.2rem", marginBottom: "14px" }}>
          {icon}
        </div>

        <h3 style={titleStyle}>{title}</h3>

        <p style={textStyle}>{text}</p>
      </div>

      {/* CTA unten fixiert */}
      <div
        style={{
          marginTop: "auto",
          paddingTop: "20px",
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
