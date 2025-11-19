// config/categoryConfig.js

// Zentrale Konfiguration aller Kategorien

export const CATEGORY_CONFIG = {
  investieren: {
    slug: "investieren",
    label: "Investieren",
    shortLabel: "Investieren",
    kicker: "Kategorie • Investieren",
    heroTitle: "Investieren mit System – statt Zocken.",
    heroSubtitle:
      "ETFs, Aktien und langfristige Strategien – verständlich erklärt, ohne Hype und ohne Fachchinesisch.",
    seoDescription:
      "Lerne, wie du Schritt für Schritt in ETFs und andere Anlagen investierst, dein Risiko streust und Vermögen aufbaust.",
    showOnHome: true,
    order: 1,
    faq: [
      {
        question: "Wie fange ich mit dem Investieren an?",
        answer:
          "Starte mit einer klaren Struktur: Notgroschen, Schulden prüfen, dann breit gestreute ETFs als Basis. Kleine Beträge reichen zum Start."
      },
      {
        question: "Sind Einzelaktien sinnvoll?",
        answer:
          "Für die meisten Menschen sind ETFs die bessere Basis. Einzelaktien können eine Ergänzung sein, aber nur mit klarer Strategie."
      }
    ],
    nextSteps: [
      {
        title: "ETF-Grundlagen",
        text: "Verstehe, wie ETFs funktionieren und warum sie so beliebt sind.",
        href: "/investieren",
        badge: "Basics"
      }
    ]
  },

  "versicherungen": {
    slug: "versicherungen",
    label: "Versicherungen",
    shortLabel: "Versicherungen",
    kicker: "Kategorie • Versicherungen",
    heroTitle: "Nur die Versicherungen, die du wirklich brauchst.",
    heroSubtitle:
      "Wir trennen Must-haves von Geldverbrennern – klar, verständlich und unabhängig.",
    seoDescription:
      "Übersicht über sinnvolle Versicherungen, Spartipps und Praxisbeispiele – ohne Verkaufsdruck.",
    showOnHome: true,
    order: 2,
    faq: [
      {
        question: "Welche Versicherungen sind wirklich wichtig?",
        answer:
          "Haftpflicht, Berufsunfähigkeit und Krankenversicherung gehören zu den wichtigsten Absicherungen. Vieles andere ist optional."
      },
      {
        question: "Wie kann ich bei Versicherungen sparen?",
        answer:
          "Tarife vergleichen, Doppelversicherungen vermeiden und regelmäßig prüfen, ob der Schutz noch zu deiner Lebenssituation passt."
      }
    ],
    nextSteps: [
      {
        title: "Versicherungs-Check",
        text: "Überprüfe deine aktuellen Verträge und erkenne Sparpotenziale.",
        href: "/versicherungen",
        badge: "Check"
      }
    ]
  },

  "geld-vermehren": {
    slug: "geld-vermehren",
    label: "Geld vermehren",
    shortLabel: "Geld vermehren",
    kicker: "Kategorie • Geld vermehren",
    heroTitle: "Dein Geld soll für dich arbeiten – nicht umgekehrt.",
    heroSubtitle:
      "Strategien, um Einkommen zu steigern, Ausgaben zu optimieren und Vermögen aufzubauen.",
    seoDescription:
      "Lerne, wie du dein Einkommen erhöhst, Ausgaben optimierst und systematisch Vermögen aufbaust.",
    showOnHome: true,
    order: 3,
    faq: [
      {
        question: "Wie kann ich mein Geld schneller vermehren?",
        answer:
          "Kombiniere drei Hebel: Einnahmen steigern, Ausgaben optimieren und den Rest automatisiert investieren."
      },
      {
        question: "Brauche ich dafür viel Startkapital?",
        answer:
          "Nein. Konstanz ist wichtiger als die Startsumme. Schon kleine Beträge können langfristig viel bewirken."
      }
    ],
    nextSteps: [
      {
        title: "Einnahmen-Booster",
        text: "Ideen, wie du dein Einkommen Schritt für Schritt erhöhen kannst.",
        href: "/geld-vermehren",
        badge: "Guide"
      }
    ]
  },

  // Vorbereitung für später:
  "familie-kinder": {
    slug: "familie-kinder",
    label: "Familie & Kinder",
    shortLabel: "Familie & Kinder",
    kicker: "Kategorie • Familie & Kinder",
    heroTitle: "Finanzielle Sicherheit für dich und deine Familie.",
    heroSubtitle:
      "Von Kinderkonto über Sparpläne bis zu Absicherung – damit der Start ins Leben leichter wird.",
    seoDescription:
      "Finanztipps für Eltern, Großeltern und alle, die für Kinder finanziell vorsorgen wollen.",
    showOnHome: false,
    order: 4,
    faq: [],
    nextSteps: []
  }
};

// Hilfsfunktion: Kategorien für die Startseite (Themenwelten)
export const HOME_CATEGORIES = Object.values(CATEGORY_CONFIG)
  .filter((cat) => cat.showOnHome)
  .sort((a, b) => (a.order || 99) - (b.order || 99));
