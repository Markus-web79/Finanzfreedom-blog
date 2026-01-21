import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FinanzFreedom</title>
      </Head>

      {/* Google Analytics – offizieller Next.js Weg */}
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
    </>
  );
}
