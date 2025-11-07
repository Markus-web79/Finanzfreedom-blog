import "../styles/globals.css";
import Header from "../components/Header";
import fs from "fs";
import path from "path";

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <Header categories={categories} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async () => {
  const contentDir = path.join(process.cwd(), "content");
  let categories = [];

  try {
    categories = fs
      .readdirSync(contentDir)
      .filter((dir) => fs.statSync(path.join(contentDir, dir)).isDirectory());
  } catch (err) {
    console.error("⚠️ Konnte Kategorien nicht laden:", err);
  }

  return { categories };
};

export default MyApp;
