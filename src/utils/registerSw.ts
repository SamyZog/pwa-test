export const registerSW = async () => {
  if ("serviceWorker" in navigator) {
    try {
      if (!navigator.serviceWorker.controller) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((reg) => reg.unregister()));
      }

      await navigator.serviceWorker.register("/sw.js");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error("SW registration failed");
    }
  }
};
