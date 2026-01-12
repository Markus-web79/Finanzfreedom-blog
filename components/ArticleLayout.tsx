import Link from "next/link";

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
      {backLink && (
        <Link href={backLink.href} className="backLink">
          ← {backLink.label}
        </Link>
      )}

      <header className="articleHeader">
        <h1>{title}</h1>
        {intro && <p className="intro">{intro}</p>}
      </header>

      <div className="articleGrid">
        <div className="articleText">
          {children}
        </div>

        {image && (
          <aside className="articleAside">
            <img src={image.src} alt={image.alt} />
          </aside>
        )}
      </div>
    </article>
  );
}
