import { useState } from "react";

export default function EtfSparplanRechner() {
  const [rate, setRate] = useState("200");
  const [jahre, setJahre] = useState("20");
  const [rendite, setRendite] = useState("6");

  const rateNum = Number(rate || 0);
  const jahreNum = Number(jahre || 0);
  const renditeNum = Number(rendite || 0);

  const monate = jahreNum * 12;
  const monatsRendite = renditeNum / 100 / 12;

  const endvermoegen =
    monatsRendite > 0
      ? rateNum *
        ((Math.pow(1 + monatsRendite, monate) - 1) / monatsRendite)
      : rateNum * monate;

  return (
    <div
      style={{
        marginTop: "32px",
        padding: "24px",
        borderRadius: "16px",
        background: "linear-gradient(180deg, #0b1220, #0a0f1a)",
        border: "1px solid #1e293b",
      }}
    >
      <label>Monatliche Sparrate (€)</label>
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        style={inputStyle}
      />

      <label>Laufzeit (Jahre)</label>
      <input
        type="number"
        value={jahre}
        onChange={(e) => setJahre(e.target.value)}
        style={inputStyle}
      />

      <label>Ø Rendite pro Jahr (%)</label>
      <input
        type="number"
        value={rendite}
        onChange={(e) => setRendite(e.target.value)}
        style={inputStyle}
      />

      <div
        style={{
          marginTop: "24px",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #6fe3d6",
        }}
      >
        <strong>Ergebnis</strong>
        <div style={{ fontSize: "22px", marginTop: "8px" }}>
          {endvermoegen.toLocaleString("de-DE", {
            style: "currency",
            currency: "EUR",
          })}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0 16px",
  borderRadius: "8px",
  border: "1px solid #1e293b",
  background: "#020617",
  color: "#e5e7eb",
};
