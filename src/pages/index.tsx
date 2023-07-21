export default function Home() {
  const showNotification = () => {
    navigator?.serviceWorker?.ready?.then?.((registration) => {
      registration?.active?.postMessage?.({
        title: "Hello",
        body: "Hello, world!",
      });
    });
  };

  return (
    <div className="p-10">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={async () => {
          try {
            Notification.requestPermission().then((permission) => {
              if (permission === "granted") {
                showNotification();
              }
            });
          } catch (error) {
            // Safari doesn't return a promise for requestPermissions and it
            // throws a TypeError. It takes a callback as the first argument
            // instead.
            if (error instanceof TypeError) {
              Notification.requestPermission((permission) => {
                if (permission === "granted") {
                  showNotification();
                }
              });
            } else {
              throw error;
            }
          }
        }}
      >
        show notfication
      </button>
    </div>
  );
}
