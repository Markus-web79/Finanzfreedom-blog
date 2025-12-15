export type Affiliate = {
  key: string;
  name: string;
  url: string;
  label: string;
  disclosure?: string;
};

export const AFFILIATES: Record<string, Affiliate> = {
  etf_depot: {
    key: "etf_depot",
    name: "ETF Depot Empfehlung",
    url: "#", // später echter Link
    label: "Depot eröffnen",
    disclosure: "Werbung"
  },

  kreditkarte: {
    key: "kreditkarte",
    name: "Kreditkarten Vergleich",
    url: "#",
    label: "Kreditkarten vergleichen",
    disclosure: "Werbung"
  }
};
