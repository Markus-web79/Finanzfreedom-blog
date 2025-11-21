// components/AffiliateButton.js
import React from "react";

export default function AffiliateButton({ text, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        background: "linear-gradient(90deg, #00c2b3, #00e5cf)",
        color: "#0f0f0f",
        padding: "12px 22px",
        borderRadius: "8px",
        fontWeight: "600",
        textDecoration: "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        marginTop: "1.2rem",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 15px rgba(0, 229, 207, 0.5)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {text || "Zum Anbieter"}
    </a>
  );
}
