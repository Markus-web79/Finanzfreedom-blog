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
    minHeight: "230px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#e5e7eb",
    textDecoration: "none",
    transition: "transform 0.15s ease, border-color 0.15s ease",
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? "default" : "pointer",
    maxWidth: "100%",
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
      <div>
        <div
          style={{
            fontSize: "2.2rem",
            marginBottom: "14px",
          }}
        >
          {icon}
        </div>

        <h3
          style={{
            fontSize: "1.25rem",
            marginBottom: "8px",
            lineHeight: 1.3,
            wordBreak: "break-word",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "0.95rem",
            opacity: 0.85,
            lineHeight: 1.6,
            maxWidth: "100%",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
            hyphens: "auto",
          }}
        >
          {text}
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          color: "#14b8a6",
          fontWeight: 500,
          fontSize: "0.95rem",
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
