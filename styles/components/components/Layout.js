import Head from 'next/head';
import '../styles/globals.css';

export default function Layout({ children, title = 'FinanzFreedom Blog', description = 'Tipps zu Finanzen & passivem Einkommen' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/* Google AdSense DEMO (ersetze client & slot später mit deinem echten Code) */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </Head>
      <div className="container">
        <header className="header">
          <div className="brand">💰 FinanzFreedom Blog</div>
          <nav className="nav">
            <a href="/">Start</a>
            <a href="/impressum.html">Impressum</a>
          </nav>
        </header>

        {/* Top Ad slot (Demo) */}
        <div className="ad">
          🔸 AdSense Platzhalter (Header) — hier erscheint Werbung, sobald du deinen echten AdSense-Code einfügst.
        </div>

        <main>{children}</main>

        <footer className="footer">
          <div>© {new Date().getFullYear()} FinanzFreedom Blog — Finanzen & passives Einkommen</div>
          <div className="ad" style={{ marginTop: '12px' }}>
            🔸 AdSense Platzhalter (Footer)
          </div>
        </footer>
      </div>
    </>
  );
}
