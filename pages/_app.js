import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Falls du später wieder Inter-Schriftarten nutzen willst,
// einfach diese zwei Zeilen aktivieren und vorher installieren:
// import '@fontsource/inter/400.css';
// import '@fontsource/inter/600.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
