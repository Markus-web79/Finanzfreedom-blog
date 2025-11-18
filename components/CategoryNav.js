import Link from "next/link";
import styles from "../styles/CategoryNav.module.css";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const categoriesFile = path.join(process.cwd(), "config", "categories.json");
  const data = fs.readFileSync(categoriesFile, "utf8");
  const categories = JSON.parse(data);

  return {
    props: {
      categories,
    },
  };
}

export default function CategoryNav({ active, categories }) {
  return (
    <nav className={styles.nav}>
      {Object.values(categories).map((cat) => (
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
