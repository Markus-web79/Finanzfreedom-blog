// components/CategoryNav.js
import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";

export default function CategoryNav() {
  const categories = [
    { name: "ETFs", path: "/etfs" },
    { name: "Geld anlegen", path: "/geld-anlegen" },
    { name: "Versicherungen", path: "/versicherungen" },
    { name: "Tools & Rechner", path: "/tools" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {categories.map((cat) => (
          <li key={cat.path}>
            <Link href={cat.path} className={styles.link}>
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
