import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import categories from "../config/categories.json";

export default function CategoryNav({ active }) {
  const list = Object.values(categories);

  return (
    <nav className={styles.nav}>
      {list.map((cat) => (
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
