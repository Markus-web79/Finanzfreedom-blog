// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* impact.com Site Verification */}
        <meta
          name="impact-site-verification"
          value="e4a2b0e8-884b-4d26-9895-28e4e9a4de7e"
        />

        {/* TEMP: solange wir prüfen, nicht indexieren */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
