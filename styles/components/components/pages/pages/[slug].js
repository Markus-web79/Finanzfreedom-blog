import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import Layout from '../components/Layout';
import path from 'path';

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const paths = files.map(file => ({ params: { slug: file.replace(/\\.md$/, '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  const excerpt = (content.split('\\n').find(l => l.trim()) || '').slice(0, 160);
  return { props: { data: { ...data, excerpt }, html } };
}

export default function PostPage({ data, html }) {
  return (
    <Layout title={`${data.title} | FinanzFreedom Blog`} description={data.excerpt}>
      <article className="card">
        <h1>{data.title}</h1>
        <div className="meta">
          {new Date(data.date).toLocaleDateString('de-DE')} • {data.tags?.join(', ')}
        </div>
        <div className="ad" style={{ margin: '12px 0' }}>
          🔸 AdSense Platzhalter (Artikel-Top)
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="ad" style={{ margin: '12px 0' }}>
          🔸 AdSense Platzhalter (Artikel-Bottom)
        </div>
      </article>
    </Layout>
  );
}
