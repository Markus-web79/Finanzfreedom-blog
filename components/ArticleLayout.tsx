import Link from "next/link";
import Image from "next/image";
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
    <main
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "3rem 1.5rem 5rem",
      }}
    >
      {/* Zurück-Link */}
      {backLink && (
        <div style={{ marginBottom: "1.5rem" }}>
          <Link
            href={backLink.href}
            style={{
              color: "#2dd4bf",
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            ← {backLink.label}
          </Link>
        </div>
      )}

      {/* Titel */}
      <h1
        style={{
          fontSize: "2.4rem",
          fontWeight: 700,
          lineHeight: 1.25,
          marginBottom: "1.5rem",
        }}
      >
        {title}
      </h1>

      {/* Intro */}
      {intro && (
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "#cbd5e1",
            marginBottom: "2.5rem",
          }}
        >
          {intro}
        </p>
      )}

      {/* Artikelbild */}
      {image && (
        <div
          style={{
            marginBottom: "3rem",
            borderRadius: "14px",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={860}
            height={420}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      )}

      {/* Inhalt */}
      <article
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.8rem",
          lineHeight: 1.75,
          fontSize: "1.05rem",
        }}
      >
        {children}
      </article>
    </main>
  );
}
