import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Script from "next/script";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />

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
