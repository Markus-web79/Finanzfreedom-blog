// 🔹 Lädt die globalen Styles (z. B. Home.css)
import "../styles/Home.css";

// 🔹 Optional: Wenn du später noch eine weitere globale CSS-Datei hast
// import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
