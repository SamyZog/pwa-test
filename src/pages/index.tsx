import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          Notification.requestPermission((permission) => {
            if (permission === "granted") {
              navigator?.serviceWorker?.ready?.then?.((registration) => {
                registration?.active?.postMessage?.({
                  title: "Hello",
                  body: "Hello, world!",
                });
              });
            }
          });
        }}
      >
        show notfication
      </button>
    </div>
  );
}
