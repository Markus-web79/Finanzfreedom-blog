// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        {/* impact.com site verification */}
        <meta
          name="impact-site-verification"
          value="e4a2b0e8-88b4-4d26-9895-28e4e9a4de7e"
        />

        {/* (optional) AWIN verification – kannst du drin lassen */}
        <meta
          name="verification"
          content="c7f1a5acf5b563516e05e2f401e50a8"
        />

        {/* TEMP: Seite nicht indexieren */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
