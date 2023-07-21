import "@/styles/globals.css";
import { registerSW } from "@/utils/registerSw";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    registerSW();
  }, []);

  return <Component {...pageProps} />;
}
