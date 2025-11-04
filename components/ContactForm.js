import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mvgpkpgw", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("sent");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label>
        Name:
        <input type="text" name="name" required style={styles.input} />
      </label>

      <label>
        E-Mail:
        <input type="email" name="email" required style={styles.input} />
      </label>

      <label>
        Nachricht:
        <textarea name="message" required style={styles.textarea} />
      </label>

      <button type="submit" style={styles.button}>
        {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
      </button>

      {status === "sent" && (
        <p style={styles.success}>✅ Vielen Dank! Deine Nachricht wurde gesendet.</p>
      )}
      {status === "error" && (
        <p style={styles.error}>❌ Fehler beim Senden. Bitte versuche es später erneut.</p>
      )}
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "500px",
    margin: "2rem auto",
    color: "#fff",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "5px",
    border: "1px solid #00bfa6",
    backgroundColor: "#001f1f",
    color: "#fff",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "5px",
    border: "1px solid #00bfa6",
    backgroundColor: "#001f1f",
    color: "#fff",
    minHeight: "120px",
  },
  button: {
    backgroundColor: "#00bfa6",
    color: "#001f1f",
    border: "none",
    padding: "0.9rem",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  success: {
    color: "#00ffae",
    fontWeight: "bold",
  },
  error: {
    color: "#ff5555",
  },
};
