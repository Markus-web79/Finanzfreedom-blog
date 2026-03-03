import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Dein Weg zur finanziellen Unabhängigkeit</title>
        <meta
          name="description"
          content="Erfahre, wie du passives Einkommen aufbaust, clever investierst und finanzielle Freiheit erreichst. FinanzFreedom – Wissen, das sich auszahlt."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:site_name" content="FinanzFreedom" />
        <meta property="og:url" content="https://finanzfreedom.de" />
        <meta
          property="og:title"
          content="FinanzFreedom – Dein Weg zur finanziellen Unabhängigkeit"
        />
        <meta
          property="og:description"
          content="Erfahre, wie du passives Einkommen aufbaust, clever investierst und finanzielle Freiheit erreichst."
        />
        <meta
          property="og:image"
          content="https://finanzfreedom.de/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@finanzfreedom" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y3NPFLQ9NK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y3NPFLQ9NK', {
            anonymize_ip: true
          });
        `}
      </Script>

      <Component {...pageProps} />
      <Footer />
    </>
  );
}
