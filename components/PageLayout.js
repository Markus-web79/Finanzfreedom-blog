import { useRouter } from "next/router";
import Link from "next/link";

export default function PageLayout({ children }) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div style={{ minHeight: "100vh" }}>
      {!isHome && (
        <div style={{ marginBottom: "24px" }}>
          <Link
            href="/"
            style={{
              color: "#2dd4bf",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            ← Zur Startseite
          </Link>
        </div>
      )}

      {children}
    </div>
  );
}
