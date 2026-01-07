import "../styles/globals.css";
import PageLayout from "../components/PageLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
