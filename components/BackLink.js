import { useRouter } from "next/router";

export default function BackButton({ label = "← Zurück" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{
        marginTop: "32px",
        background: "none",
        border: "none",
        color: "#22d3ee",
        fontSize: "0.95rem",
        cursor: "pointer",
        padding: 0,
      }}
    >
      {label}
    </button>
  );
}
