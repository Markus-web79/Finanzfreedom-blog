import Link from "next/link";
import React from "react";

type ArticleLayoutProps = {
  title: string;
  intro?: string;
  image?: {
    src: string;
    alt: string;
  };
  backLink?: {
    href: string;
    label: string;
  };
  children: React.ReactNode;
};

export default function ArticleLayout({
  title,
  intro,
  image,
  backLink,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="article">
      <div className="articleContainer">
        {backLink && (
          <Link href={backLink.href} className="backLink">
            ← {backLink.label}
          </Link>
        )}

        <header className="articleHeader">
          <h1>{title}</h1>
          {intro && <p className="intro">{intro}</p>}
        </header>

        {image && (
          <div className="articleImage">
            <img src={image.src} alt={image.alt} />
          </div>
        )}

        {/* Artikelinhalt */}
        <div className="articleContent">{children}</div>

        {/* ===============================
            NEWSLETTER / LEAD MAGNET
        =============================== */}
        <section className="newsletterBox">
          <h3>ETF Starter Guide – kostenlos</h3>
          <p>
            Du willst sicher mit ETFs starten und typische Anfängerfehler
            vermeiden? Dann hol dir unseren kostenlosen ETF Starter Guide per
            E-Mail.
          </p>

          <div className="newsletterForm">
            <iframe
              src="https://9e0f1216.sibforms.com/serve/MUIFACuRiADRUssR6UNDEVB7MgiCd9FuyB698G-aWqi89jdoeZgzhaRz-FI7nZ1AYB3WFLXhOjjrkaT5d5iLYlAXWMXjUuKKRWTe_Uc_L8sx0aEr4q_AefgabBlRiqAWTlkuOjqw2om2DgMmHNbamrFV5RH9iofDTJF73U2RcioAiVQvbFvtdJuJb6MItpnjdOU0NCD_P-mtA5B7ng=="
              style={{
                width: "100%",
                maxWidth: "540px",
                height: "420px",
                border: "0",
                display: "block",
                margin: "0 auto",
              }}
              loading="lazy"
              title="ETF Starter Newsletter Anmeldung"
            />
          </div>

          <small className="newsletterHint">
            Kein Spam. Jederzeit abmeldbar.
          </small>
        </section>
      </div>
    </article>
  );
}
