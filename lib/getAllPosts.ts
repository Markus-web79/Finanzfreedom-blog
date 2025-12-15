export type Post = {
  slug: string;
  title: string;
  content: string;
  category: string;
};

export function getAllPosts(): Post[] {
  // Beispiel – hier kommt deine echte Logik rein
  return [
    {
      slug: "beispiel-artikel",
      title: "Beispiel Artikel",
      content: "Inhalt des Artikels",
      category: "allgemein",
    },
  ];
}
