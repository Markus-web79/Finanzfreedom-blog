import { useRouter } from "next/router";
import Link from "next/link";

export default function BackLink() {
  const router = useRouter();

  let href = "/";
  let label = "← Zur Startseite";

  if (router.pathname.startsWith("/versicherungen/")) {
    href = "/versicherungen";
    label = "← Zurück zu Versicherungen";
  } else if (router.pathname.startsWith("/investieren/")) {
    href = "/investieren";
    label = "← Zurück zu Investieren";
  }

  return (
    <div style={{ marginBottom: "24px" }}>
      <Link href={href} style={{ color: "#22d3ee", fontSize: "0.95rem" }}>
        {label}
      </Link>
    </div>
  );
}
