import "@/styles/globals.css";
import { registerSW } from "@/utils/registerSw";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!("Notification" in window)) {
      return;
    }

    console.log(Notification.permission);

    if (Notification.permission === "granted") {
      registerSW();
    }

    if (Notification.permission !== "denied") {
      try {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            registerSW();
          }
        });
      } catch (error) {
        Notification.requestPermission((permission) => {
          if (permission === "granted") {
            registerSW();
          }
        });
      }
    }
  }, []);

  return <Component {...pageProps} />;
}
