export default function NewsletterFooter() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        backgroundColor: "#f3f4f6",
        borderTop: "1px solid #e5e7eb",
        marginTop: "4rem",
      }}
    >
      <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
        💌 Bleib auf dem Laufenden!
      </h3>
      <p style={{ color: "#555", marginBottom: "1.5rem" }}>
        Erhalte jede Woche exklusive Tipps zu Finanzen & passivem Einkommen.
      </p>
      <form
        action="#"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <input
          type="email"
          placeholder="Deine E-Mail-Adresse"
          required
          style={{
            padding: "0.8rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            width: "280px",
            maxWidth: "80%",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "0.8rem 1.2rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Jetzt abonnieren
        </button>
      </form>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#777" }}>
        Kein Spam. Jederzeit kündbar.
      </p>
    </footer>
  );
}
