import "../styles/globals.css";
import { useEffect } from "react";
import { initFadeIn } from "../scripts/fadeIn";
import "../styles/globals.css";
import "../styles/Home.module.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFadeIn();
    }
  }, []);

  return <Component {...pageProps} />;
}
