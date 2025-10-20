export default function NewsletterFooterFixed() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>📬 Bleib auf dem Laufenden</h2>
        <p style={styles.text}>
          Erhalte regelmäßig Tipps zu passivem Einkommen, Finanzfreiheit und cleverem Investieren – bald verfügbar!
        </p>

        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Deine E-Mail-Adresse"
            style={styles.input}
            disabled
          />
          <button type="submit" style={styles.button} disabled>
            Bald verfügbar
          </button>
        </form>

        <p style={styles.note}>
          💡 Der Newsletter startet bald. Trage dich ein, sobald er verfügbar ist.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#f8f9fa",
    borderTop: "1px solid #eee",
    padding: "3rem 1rem",
    textAlign: "center",
    marginTop: "4rem",
  },
  container: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
  },
  text: {
    color: "#555",
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  input: {
    padding: "0.7rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "260px",
  },
  button: {
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    padding: "0.7rem 1rem",
    borderRadius: "5px",
    cursor: "not-allowed",
  },
  note: {
    color: "#888",
    fontSize: "0.9rem",
  },
};
