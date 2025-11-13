import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";

export default function CategoryNav({ active }) {
  const categories = [
    { slug: "investieren", label: "Investieren" },
    { slug: "versicherungen", label: "Versicherungen" },
    { slug: "geld-vermehren", label: "Geld vermehren" },
    { slug: "sparen", label: "Sparen & Haushalt" },
    { slug: "steuern", label: "Steuern & Recht" },
    { slug: "vergleiche", label: "Vergleichstools" }
  ];

  return (
    <nav className={styles.nav}>
      {categories.map(cat => (
        <Link
          key={cat.slug}
          href={`/${cat.slug}`}
          className={active === cat.slug ? styles.active : ""}
        >
          {cat.label}
        </Link>
      ))}
    </nav>
  );
}
