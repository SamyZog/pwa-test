self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("message", (event) => {
  const { title, payload } = event.data;

  registration.showNotification(title, payload);
});

self.addEventListener("notificationclick", (event) => {
  if (event.notification.data.url) {
    clients.openWindow(event.notification.data.url);
  }

  event.notification.close();
});
