import Link from "next/link";
import { useRouter } from "next/router";

export default function BackLink({ label = "← Zurück" }) {
  const router = useRouter();

  return (
    <div style={{ marginTop: "48px" }}>
      <button
        onClick={() => router.back()}
        style={{
          background: "transparent",
          border: "1px solid #2dd4bf",
          color: "#2dd4bf",
          padding: "10px 16px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        {label}
      </button>
    </div>
  );
}
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
