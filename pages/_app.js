import "../styles/Home.css";

// 🔧 Diese Datei sorgt dafür, dass dein globales CSS (Home.css) korrekt geladen wird
//    und für alle Seiten verfügbar ist (index.js, [slug].js etc.)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
