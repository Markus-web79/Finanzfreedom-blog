import categories from "./categories.json";

export function getCategoryConfig(slug) {
  return categories[slug] || categories["default"] || {};
}

export function getAllCategories() {
  return Object.keys(categories).map(key => ({
    slug: categories[key].slug,
    label: categories[key].label,
    shortLabel: categories[key].shortLabel,
    kicker: categories[key].kicker,
  }));
}
