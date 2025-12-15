import { AFFILIATES, AffiliateKey } from "./affiliates";

export function renderAffiliates(content: string): string {
  return content.replace(
    /\{\{affiliate\.([a-zA-Z0-9_-]+)\}\}/g,
    (_, key: AffiliateKey) => {
      const aff = AFFILIATES[key];
      if (!aff) return "";

      return `<a href="${aff.url}" target="_blank" rel="nofollow sponsored">${aff.label}</a>`;
    }
  );
}
