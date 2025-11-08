import Link from "next/link";

export default function CategoryNav() {
  const categories = [
    { name: "ETFs", path: "/etfs" },
    { name: "Geld anlegen", path: "/geld-anlegen" },
    { name: "Versicherungen", path: "/versicherungen" },
    { name: "Tools & Rechner", path: "/tools" },
  ];

  return (
    <nav style={styles.nav}>
      {categories.map((cat) => (
        <Link key={cat.path} href={cat.path} style={styles.link}>
          {cat.name}
        </Link>
      ))}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    background: "rgba(0, 194, 179, 0.05)",
    padding: "18px 10px",
    borderBottom: "1px solid rgba(0, 194, 179, 0.2)",
    marginBottom: "40px",
  },
  link: {
    color: "#d0d0d0",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.2s ease",
  },
  linkHover: {
    color: "#00c2b3",
  },
};
