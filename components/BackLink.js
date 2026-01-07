import Link from "next/link";

export default function BackLink({ href = "/", label = "← Zurück" }) {
  return (
    <div style={{ margin: "24px 0" }}>
      <Link href={href}>
        <span
          style={{
            cursor: "pointer",
            color: "#27e0c1",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {label}
        </span>
      </Link>
    </div>
  );
}
