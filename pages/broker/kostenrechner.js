// pages/broker/kostenrechner.js
import React, { useMemo, useState } from "react";
import Link from "next/link";

export default function Kostenrechner() {
  // Strings, damit wir Input sauber kontrollieren können (keine führenden Nullen)
  const [monthlyContributionStr, setMonthlyContributionStr] = useState("100");
  const [yearsStr, setYearsStr] = useState("10");

  // Hilfsfunktionen: nur Ziffern erlauben, führende Nullen entfernen
  const sanitizeIntString = (value) => {
    const digitsOnly = String(value ?? "").replace(/[^\d]/g, "");
    if (digitsOnly === "") return "";
    // führende Nullen entfernen, aber "0" erlauben
    const trimmed = digitsOnly.replace(/^0+(?=\d)/, "");
    return trimmed;
  };

  const monthlyContribution = useMemo(() => {
    const n = parseInt(monthlyContributionStr || "0", 10);
    return Number.isFinite(n) ? n : 0;
  }, [monthlyContributionStr]);

  const years = useMemo(() => {
    const n = parseInt(yearsStr || "0", 10);
    return Number.isFinite(n) ? n : 0;
  }, [yearsStr]);

  // Seriöse Logik: keine Eurobeträge, sondern Eignung nach Szenario
  // Idee: Score + Begründung (transparent, nachvollziehbar)
  const result = useMemo(() => {
    const months = Math.max(0, years) * 12;
    const totalContrib = Math.max(0, monthlyContribution) * months;

    // Guards (wenn 0/leer)
    if (monthlyContribution <= 0 || years <= 0) {
      return {
        headline: "Gib Sparrate und Anlagedauer ein",
        sub: "Dann zeigen wir dir eine seriöse, nachvollziehbare Empfehlung (ohne Fantasie-Gebühren).",
        recommendationKey: "none",
        cards: buildCards({
          monthlyContribution,
          years,
          totalContrib,
          highlight: "none",
        }),
      };
    }

    // Heuristiken (KEINE Gebührenbehauptungen, nur “geeignet für”)
    // - TR: stark bei “einfacher Sparplan / Einsteiger / minimaler Overhead”
    // - Scalable Free: gut wenn “mehr Auswahl/Features” wichtig, ohne fixe Pakete
    // - Scalable Prime: sinnvoll ab größerem Volumen/mehr Aktivität (ohne harte €-Schwelle)
    //
    // Wir dürfen hier keine konkreten Gebühren “versprechen”; daher nur Eignung & Annahmen.

    let scoreTR = 0;
    let scoreSCFree = 0;
    let scoreSCPrime = 0;

    // Einsteiger-Bonus
    scoreTR += 3;
    scoreSCFree += 2;
    scoreSCPrime += 1;

    // Langer Horizont -> Stabilität/Buy&Hold
    if (years >= 10) {
      scoreTR += 2;
      scoreSCFree += 2;
      scoreSCPrime += 1;
    } else if (years >= 5) {
      scoreTR += 1;
      scoreSCFree += 1;
    }

    // Höhere Sparrate -> “Prime kann sich eher lohnen” (ohne konkrete Gebühren)
    if (monthlyContribution >= 300) {
      scoreSCFree += 2;
      scoreSCPrime += 3;
      scoreTR += 1;
    } else if (monthlyContribution >= 150) {
      scoreSCFree += 2;
      scoreSCPrime += 2;
      scoreTR += 2;
    } else {
      // kleine Sparrate -> möglichst simpel
      scoreTR += 3;
      scoreSCFree += 1;
      scoreSCPrime += 0;
    }

    // Sehr großes geplantes Volumen -> mehr Funktions-/Modell-Optionen relevant
    if (totalContrib >= 30000) {
      scoreSCPrime += 2;
      scoreSCFree += 2;
      scoreTR += 1;
    }

    const scores = [
      { key: "trade_republic", score: scoreTR },
      { key: "scalable_free", score: scoreSCFree },
      { key: "scalable_prime", score: scoreSCPrime },
    ].sort((a, b) => b.score - a.score);

    const best = scores[0]?.key || "trade_republic";

    const rationale = buildRationale({
      best,
      monthlyContribution,
      years,
      totalContrib,
    });

    return {
      headline: rationale.headline,
      sub: rationale.sub,
      recommendationKey: best,
      cards: buildCards({
        monthlyContribution,
        years,
        totalContrib,
        highlight: best,
      }),
    };
  }, [monthlyContribution, years, monthlyContributionStr, yearsStr]);

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <Link href="/" style={styles.back}>
          ← Zur Startseite
        </Link>

        <h1 style={styles.title}>Welcher Broker passt wirklich zu dir?</h1>
        <p style={styles.subtitle}>
          Basierend auf Sparrate & Anlagehorizont – <strong>ehrlich</strong> und{" "}
          <strong>verständlich</strong>, ohne irreführende Fantasie-Kosten.
        </p>
      </header>

      <section style={styles.panel}>
        <div style={styles.inputs}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Monatliche Sparrate (€)</label>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              value={monthlyContributionStr}
              onChange={(e) => setMonthlyContributionStr(sanitizeIntString(e.target.value))}
              onFocus={() => {
                // Wenn "0" drin steht, beim Antippen leer machen
                if (monthlyContributionStr === "0") setMonthlyContributionStr("");
              }}
              placeholder="z. B. 150"
              style={styles.input}
            />
            <div style={styles.hint}>Nur Ziffern. Keine führenden Nullen.</div>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Anlagedauer (Jahre)</label>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              value={yearsStr}
              onChange={(e) => setYearsStr(sanitizeIntString(e.target.value))}
              onFocus={() => {
                if (yearsStr === "0") setYearsStr("");
              }}
              placeholder="z. B. 10"
              style={styles.input}
            />
            <div style={styles.hint}>Realistisch: 5–20 Jahre.</div>
          </div>
        </div>

        <div style={styles.disclaimer}>
          <strong>Transparenz:</strong> Diese Empfehlung ist eine{" "}
          <strong>Eignungs-Bewertung</strong> (keine Preisgarantie). Kostenmodelle
          und Konditionen können sich ändern – prüfe vor Abschluss stets die
          aktuellen Preisverzeichnisse der Anbieter.
        </div>
      </section>

      <section style={styles.result}>
        <div style={styles.resultBox}>
          <div style={styles.resultTop}>
            <div style={styles.resultKicker}>Ergebnis</div>
            <div style={styles.resultHeadline}>{result.headline}</div>
            <div style={styles.resultSub}>{result.sub}</div>
          </div>
        </div>
      </section>

      <section style={styles.grid}>
        {result.cards.map((c) => (
          <Link key={c.key} href={c.href} style={c.highlight ? styles.cardHighlight : styles.card}>
            <div style={c.highlight ? styles.cardBarHighlight : styles.cardBar} />
            <div style={styles.cardHeaderRow}>
              <h3 style={styles.cardTitle}>{c.title}</h3>
              {c.badge ? <span style={styles.badge}>{c.badge}</span> : null}
            </div>

            <p style={styles.cardText}>{c.text}</p>

            <ul style={styles.bullets}>
              {c.bullets.map((b, idx) => (
                <li key={idx} style={styles.bulletItem}>
                  {b}
                </li>
              ))}
            </ul>

            <span style={styles.cta}>Jetzt vergleichen →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

function buildRationale({ best, monthlyContribution, years, totalContrib }) {
  const prettyTotal = new Intl.NumberFormat("de-DE").format(totalContrib);
  const prettyMonthly = new Intl.NumberFormat("de-DE").format(monthlyContribution);

  const base = {
    headline: "Empfehlung bereit",
    sub: `Dein Szenario: ${prettyMonthly} €/Monat über ${years} Jahre (Einzahlungen ca. ${prettyTotal} €).`,
  };

  if (best === "trade_republic") {
    return {
      headline: "Trade Republic passt am besten für dein Szenario",
      sub:
        base.sub +
        " Fokus: einfacher Einstieg, schlankes Setup und unkomplizierter Sparplan-Start. Ideal, wenn du langfristig regelmäßig investierst und es simpel halten willst.",
    };
  }

  if (best === "scalable_free") {
    return {
      headline: "Scalable Capital Free passt am besten für dein Szenario",
      sub:
        base.sub +
        " Fokus: mehr Auswahl/Optionen als Einsteiger-Setups, ohne direkt ein Paket-Modell in den Vordergrund zu stellen. Sinnvoll, wenn du etwas mehr Flexibilität willst.",
    };
  }

  return {
    headline: "Scalable Capital Prime passt am besten für dein Szenario",
    sub:
      base.sub +
      " Fokus: eher sinnvoll, wenn du größere Volumina planst oder ein Modell mit mehr Features/Komfort bevorzugst. Wichtig: Konditionen vorher prüfen, damit es zu deinem Nutzungsverhalten passt.",
  };
}

function buildCards({ highlight }) {
  return [
    {
      key: "trade_republic",
      title: "Trade Republic",
      href: "/broker/trade-republic",
      badge: highlight === "trade_republic" ? "Empfehlung" : null,
      highlight: highlight === "trade_republic",
      text: "Für viele Einsteiger die simpelste Variante, um mit ETF-Sparplänen zu starten.",
      bullets: [
        "Sehr einfacher Einstieg (App-first)",
        "Gut für Buy-and-Hold & Sparplan-Routine",
        "Wenn du es maximal unkompliziert willst",
      ],
    },
    {
      key: "scalable_free",
      title: "Scalable Capital Free",
      href: "/broker/scalable-capital",
      badge: highlight === "scalable_free" ? "Empfehlung" : null,
      highlight: highlight === "scalable_free",
      text: "Mehr Optionen/Flexibilität – interessant, wenn du mehr Auswahl und Struktur möchtest.",
      bullets: [
        "Mehr Auswahl/Optionen (je nach Angebot)",
        "Gut, wenn du dich etwas tiefer einarbeiten willst",
        "Sauberer Mittelweg zwischen simpel & flexibel",
      ],
    },
    {
      key: "scalable_prime",
      title: "Scalable Capital Prime",
      href: "/broker/scalable-capital",
      badge: highlight === "scalable_prime" ? "Empfehlung" : null,
      highlight: highlight === "scalable_prime",
      text: "Für Nutzer, die eher mehr Features/Komfort wollen oder größere Volumina planen.",
      bullets: [
        "Kann bei bestimmter Nutzung attraktiver sein",
        "Eher relevant bei größerem Volumen/mehr Aktivität",
        "Konditionen prüfen (Paket-/Modell-Logik)",
      ],
    },
  ];
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "54px 18px 80px",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
    color: "#e5e7eb",
  },
  header: {
    maxWidth: "1100px",
    margin: "0 auto 26px",
    textAlign: "center",
  },
  back: {
    display: "inline-block",
    marginBottom: "14px",
    color: "#2dd4bf",
    textDecoration: "none",
    fontWeight: 700,
  },
  title: {
    fontSize: "2.35rem",
    marginBottom: "10px",
    color: "#ffffff",
    letterSpacing: "-0.02em",
  },
  subtitle: {
    fontSize: "1.06rem",
    color: "#9ca3af",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  panel: {
    maxWidth: "1100px",
    margin: "18px auto 20px",
    background: "rgba(2, 6, 23, 0.45)",
    border: "1px solid #1e293b",
    borderRadius: "18px",
    padding: "22px",
  },
  inputs: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
    alignItems: "end",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    color: "#cbd5e1",
    fontWeight: 700,
  },
  input: {
    width: "100%",
    padding: "14px 14px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#ffffff",
    fontSize: "1.05rem",
    outline: "none",
  },
  hint: {
    fontSize: "0.85rem",
    color: "#94a3b8",
  },
  disclaimer: {
    marginTop: "16px",
    paddingTop: "14px",
    borderTop: "1px solid #1e293b",
    color: "#9ca3af",
    fontSize: "0.95rem",
    lineHeight: 1.6,
  },

  result: {
    maxWidth: "1100px",
    margin: "0 auto 18px",
  },
  resultBox: {
    borderRadius: "18px",
    border: "1px solid #1e293b",
    background: "rgba(2, 6, 23, 0.35)",
    padding: "18px 18px",
  },
  resultTop: {
    textAlign: "left",
  },
  resultKicker: {
    color: "#2dd4bf",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    fontSize: "0.8rem",
    marginBottom: "8px",
  },
  resultHeadline: {
    fontSize: "1.35rem",
    fontWeight: 800,
    color: "#ffffff",
    marginBottom: "6px",
  },
  resultSub: {
    color: "#cbd5e1",
    lineHeight: 1.65,
  },

  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
    gap: "18px",
  },
  card: {
    position: "relative",
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "20px",
    textDecoration: "none",
    color: "#e5e7eb",
  },
  cardHighlight: {
    position: "relative",
    background: "#020617",
    border: "1px solid #2dd4bf",
    borderRadius: "16px",
    padding: "20px",
    textDecoration: "none",
    color: "#e5e7eb",
    boxShadow: "0 0 0 1px rgba(45, 212, 191, 0.25)",
  },
  cardBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#334155",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  cardBarHighlight: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: "#2dd4bf",
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  cardHeaderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "6px",
  },
  cardTitle: {
    fontSize: "1.1rem",
    margin: 0,
    color: "#ffffff",
    fontWeight: 800,
  },
  badge: {
    background: "rgba(45, 212, 191, 0.15)",
    color: "#2dd4bf",
    border: "1px solid rgba(45, 212, 191, 0.35)",
    padding: "6px 10px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
  },
  cardText: {
    marginTop: "10px",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    color: "#cbd5e1",
  },
  bullets: {
    marginTop: "12px",
    paddingLeft: "18px",
    color: "#94a3b8",
    lineHeight: 1.6,
  },
  bulletItem: {
    marginBottom: "6px",
  },
  cta: {
    display: "inline-block",
    marginTop: "12px",
    color: "#2dd4bf",
    fontWeight: 800,
  },
};
