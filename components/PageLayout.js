import BackLink from "./BackLink";

export default function PageLayout({ children }) {
  return (
    <>
      <BackLink />
      <main>{children}</main>
    </>
  );
}
