// ✅ Global Styles werden hier zentral importiert
import "../styles/globals.css";
import "../styles/Home.css";

// ✅ Das ist die Haupt-App-Komponente von Next.js
// Sie umschließt alle Seiten (z. B. index.js, [slug].js usw.)
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
