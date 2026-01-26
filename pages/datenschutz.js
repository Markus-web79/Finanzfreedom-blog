// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* Impact Site Verification */}
        <meta
          name="impact-site-verification"
          content="d3904270-1cac-4cd4-9b6a-07ca68348969"
        />

        {/* robots ggf. später entfernen */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
