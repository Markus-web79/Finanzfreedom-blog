import { useRouter } from "next/router";
import BackLink from "./BackLink";

export default function PageLayout({ children }) {
  const router = useRouter();

  let backHref = "/";
  let backLabel = "← Zur Startseite";

  if (router.pathname.startsWith("/versicherungen")) {
    backHref = "/versicherungen";
    backLabel = "← Zur Versicherungen";
  }

  if (router.pathname.startsWith("/investieren")) {
    backHref = "/investieren";
    backLabel = "← Zur Investieren";
  }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 20px" }}>
      <BackLink href={backHref} label={backLabel} />
      {children}
    </div>
  );
}
