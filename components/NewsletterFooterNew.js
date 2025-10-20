export default function NewsletterFooter() {
  return (
    <footer
      style={{
        background: "#f4f4f4",
        padding: "2rem",
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <h3>📩 Bleib auf dem Laufenden</h3>
      <p>Erhalte regelmäßig Tipps zu passivem Einkommen und Finanzen!</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ marginTop: "1rem" }}
      >
        <input
          type="email"
          placeholder="Deine E-Mail-Adresse"
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "250px",
            marginRight: "0.5rem",
          }}
          disabled
        />
        <button
          type="submit"
          disabled
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "not-allowed",
          }}
        >
          Bald verfügbar
        </button>
      </form>
      <p style={{ color: "#666", fontSize: "0.9rem", marginTop: "1rem" }}>
        💡 Der Newsletter startet bald – trag dich ein, sobald er verfügbar ist!
      </p>
    </footer>
  );
}
