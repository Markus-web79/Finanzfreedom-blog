import { AFFILIATES } from "./affiliates";

export function renderAffiliates(html: string): string {
  return html.replace(
    /<!--\s*AFFILIATE:([a-z0-9_-]+)\s*-->/gi,
    (_, key) => {
      const aff = AFFILIATES[key];
      if (!aff) return "";

      return `
        <div style="border:1px solid #e0e0e0;padding:16px;margin:24px 0;border-radius:8px">
          <strong>${aff.name}</strong>
          <p style="margin:8px 0">
            <a href="${aff.url}" target="_blank" rel="nofollow sponsored">
              ${aff.label}
            </a>
          </p>
          <small>${aff.disclosure ?? ""}</small>
        </div>
      `;
    }
  );
}
