import Head from "next/head";
import CategoryNav from "../components/CategoryNav";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { getCategories } from "../config/categoryConfig";

type Category = {
  slug: string;
  title: string;
};

type Props = {
  categories: Category[];
};

export default function Home({ categories }: Props) {
  return (
    <>
      <Head>
        <title>FinanzFreedom – Finanzielle Freiheit aufbauen</title>
        <meta
          name="description"
          content="FinanzFreedom – Dein Portal für ETFs, Versicherungen, Geld sparen und finanzielle Freiheit."
        />
      </Head>

      <Header />
      <Hero />

      {/* Kategorienavigation */}
      <CategoryNav categories={categories} />

      {/* Platz für spätere Startseiten-Sections */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        {/* Hier kommen später Featured-Artikel, Guides etc. */}
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const categories = getCategories();

  return {
    props: {
      categories,
    },
  };
}
