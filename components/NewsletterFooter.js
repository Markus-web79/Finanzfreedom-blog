export default function NewsletterFooter() {
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
          🔒 Der Newsletter startet bald. Trage dich ein, sobald er verfügbar ist.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#f4f4f4",
    padding: "3rem 1rem",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    marginTop: "3rem",
  },
  container: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
  },
  text: {
    color: "#555",
    marginBottom: "1.5rem",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
  },
  input: {
    padding: "0.7rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "60%",
  },
  button: {
    padding: "0.7rem 1.2rem",
    background: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
  },
  note: {
    color: "#777",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
};
