import fs from 'fs';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import path from 'path';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  const posts = files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    return {
      ...data,
      slug: data.slug || file.replace(/\\.md$/, '')
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="grid">
        <div>
          {posts.map(p => (
            <article key={p.slug} className="card">
              <h2><a href={`/${p.slug}.html`}>{p.title}</a></h2>
              <div className="meta">
                {new Date(p.date).toLocaleDateString('de-DE')} • {p.tags?.join(', ')}
              </div>
              <p>{p.excerpt || 'Weiterlesen...'}</p>
              <div className="ad" style={{ marginTop: '8px' }}>
                🔸 AdSense Platzhalter (zwischen Artikeln)
              </div>
            </article>
          ))}
          {posts.length === 0 && <p>Noch keine Artikel – der Generator veröffentlicht automatisch täglich einen neuen Beitrag.</p>}
        </div>
        <aside className="sidebar">
          <div className="card">
            <h3>Empfehlungen (Demo-Affiliate)</h3>
            <ul>
              <li><a href="https://www.amazon.de/dp/B09XYZ1234?tag=DEMO-21">ETF-Guide Buch (Amazon)</a></li>
              <li><a href="https://partner.finanztool.example/ref/demo123">Finanz-Tool Vergleich</a></li>
              <li><a href="https://www.amazon.de/dp/B08ABC5678?tag=DEMO-21">Sparplan-Buch (Amazon)</a></li>
            </ul>
            <p style={{ fontSize: '.85rem', color: '#666' }}>
              Diese Links sind Demo-Beispiele. Ersetze sie durch deine eigenen Affiliate-Links.
            </p>
          </div>
        </aside>
      </div>
    </Layout>
  );
}
