import "@/styles/globals.css";
import { registerSW } from "@/utils/registerSw";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!("Notification" in window)) {
      return;
    }

    if (Notification.permission === "granted") {
      registerSW();
    }

    if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          registerSW();
        }

        if (permission === "denied") {
          console.log("Permission wasn't granted. Allow a retry.");
          return;
        }

        console.log("Permission wasn't granted. Allow a retry.");
      });
    }
  }, []);

  return <Component {...pageProps} />;
}
