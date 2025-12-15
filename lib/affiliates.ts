// lib/affiliates.ts
export const AFFILIATES = {
  trade_republic: {
    label: "Trade Republic",
    url: "https://traderepublic.com"
  },
  scalable_capital: {
    label: "Scalable Capital",
    url: "https://scalable.capital"
  }
} as const;

export type AffiliateKey = keyof typeof AFFILIATES;
