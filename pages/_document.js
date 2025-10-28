// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* AWIN site verification */}
        <meta
          name="verification"
          content="c7f1a5acfd56b563516e05e2f401e50a8"
        />

        {/* TEMP: Seite nicht indexieren, solange wir prüfen */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
