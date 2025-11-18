import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import categories from "../config/categories.json";

export default function CategoryNav({ active }) {
  return (
    <nav className={styles.nav}>
      {Object.values(categories).map((cat) => (
        <Link
          key={cat.slug}
          href={`/category/${cat.slug}`}
          className={active === cat.slug ? styles.active : ""}
        >
          {cat.shortLabel || cat.label}
        </Link>
      ))}
    </nav>
  );
}
