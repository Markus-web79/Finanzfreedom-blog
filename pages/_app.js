import { useEffect } from "react";
import { initFadeIn } from "../scripts/fadeIn";
import "../styles/Home.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      initFadeIn();
    }
  }, []);

  return <Component {...pageProps} />;
}
