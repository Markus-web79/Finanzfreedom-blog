import { useRouter } from "next/router";
import BackLink from "./BackLink";

export default function PageLayout({ children }) {
  const router = useRouter();

  let backHref = "/";
  let backLabel = "← Zur Startseite";

  if (router.pathname.startsWith("/investieren")) {
    backHref = "/investieren";
    backLabel = "← Zurück zu Investieren";
  }

  if (router.pathname.startsWith("/versicherungen")) {
    backHref = "/versicherungen";
    backLabel = "← Zurück zu Versicherungen";
  }

  if (router.pathname.startsWith("/wissen")) {
    backHref = "/wissen";
    backLabel = "← Zurück zu Wissen";
  }

  return (
    <>
      <BackLink href={backHref} label={backLabel} />
      {children}
    </>
  );
}
