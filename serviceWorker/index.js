const isLocalhost = Boolean(
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$|localhost|\[::1\]/
  )
);

const registerValidSW = (swUrl) => {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;

        installingWorker.onstatechange = () => {
          if (installingWorker.state === "installed")
            console.log(
              navigator.serviceWorker.controller
                ? "New content is available; please refresh."
                : "Content is cached for offline use."
            );
        };
      };
    })
    .catch((error) => {
      console.error("Error during service worker registration:", error);
    });
};

const checkValidServiceWorker = (swUrl) => {
  fetch(swUrl)
    .then((response) => {
      if (
        response.status === 404 ||
        response.headers.get("content-type").indexOf("javascript") === -1
      ) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
};

export default function register() {
  const publicUrl =
    !("serviceWorker" in navigator) && !(process.env.NODE_ENV === "production")
      ? new URL(process.env.PUBLIC_URL, window.location)
      : new URL(window.location);

  if (publicUrl.origin !== window.location.origin) return;

  window.addEventListener("load", () => {
    const swUrl = `${publicUrl}/service-worker.js`;

    !isLocalhost ? registerValidSW(swUrl) : checkValidServiceWorker(swUrl);
  });
}

export function unregister() {
  return "serviceWorker" in navigator
    ? navigator.serviceWorker.ready.then((worker) => worker.unregister())
    : null;
}
