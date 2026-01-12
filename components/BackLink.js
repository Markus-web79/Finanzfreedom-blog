import Link from "next/link";

export default function BackLink({ href = "/", label = "Zurück" }) {
  return (
    <div style={styles.wrapper}>
      <Link href={href} style={styles.link}>
        ← {label}
      </Link>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto 32px",
  },
  link: {
    color: "#6fe3d6",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
  },
};
