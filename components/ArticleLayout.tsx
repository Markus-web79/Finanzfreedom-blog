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

        <div className="articleContent">{children}</div>
      </div>
    </article>
  );
}
