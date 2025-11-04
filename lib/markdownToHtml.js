// lib/markdownToHtml.js
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';

// Wandelt Markdown → HTML um (mit Tabellen, Überschriften-Links & Syntax-Highlighting)
export async function mdToHtml(markdown) {
  const file = await remark()
    .use(remarkGfm) // Tabellen, Checklists, Strikethrough
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: { className: ['autolink'] }
    })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown || '');

  return String(file);
}
