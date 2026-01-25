import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom</title>
        <meta
          name="description"
          content="FinanzFreedom – unabhängiges Finanzportal für ETFs, Investieren, Sparen und finanzielle Freiheit."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      {/* Page Content */}
      <Component {...pageProps} />

      {/* Global Footer (Impressum, Kontakt etc.) */}
      <Footer />
    </>
  );
}
