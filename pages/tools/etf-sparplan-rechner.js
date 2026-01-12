import Head from "next/head";
import Link from "next/link";
import EtfSparplanRechner from "../../components/EtfSparplanRechner";

export default function EtfSparplanRechnerPage() {
  return (
    <>
      <Head>
        <title>ETF Sparplan Rechner – Rendite & Vermögen berechnen</title>
        <meta
          name="description"
          content="Kostenloser ETF Sparplan Rechner: Berechne Rendite, Laufzeit, Sparrate und dein mögliches Endvermögen einfach online."
        />
      </Head>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "40px 20px" }}>
        {/* BACK BUTTON */}
        <div style={{ marginBottom: "24px" }}>
          <Link href="/investieren/etfs" style={{ color: "#6fe3d6" }}>
            ← Zur ETF-Übersicht
          </Link>
        </div>

        <h1>ETF Sparplan Rechner</h1>
        <p>
          Berechne in wenigen Sekunden, wie viel Vermögen du mit einem
          ETF-Sparplan aufbauen kannst.
        </p>

        {/* HIER IST DER RECHNER */}
        <EtfSparplanRechner />
      </main>
    </>
  );
}
