// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* AWIN site verification */}
        <meta
          name="verification"
          content="c7f1a5acf5b565316e05e2f401e50a8"
        />

        {/* impact.com site verification */}
        <meta
          name="impact-site-verification"
          content="e4a2b0e8-884b-4d26-9895-28e4e9a4de7e"
        />

        {/* TEMP: Seite nicht indexieren, solange Setup läuft */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
