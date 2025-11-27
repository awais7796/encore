const CAL_LINK = "awais-khan-d2efil/30min";
const CAL_CONFIG = {
  layout: "month_view",
};

let calScriptPromise = null;
let calInitialized = false;

const loadCalScript = () => {
  if (typeof window === "undefined") return Promise.resolve();

  if (window.Cal && typeof window.Cal === "function") {
    return Promise.resolve();
  }

  if (!calScriptPromise) {
    calScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  return calScriptPromise;
};

const initCal = () => {
  if (typeof window === "undefined" || !window.Cal || calInitialized) return;

  window.Cal("init", { origin: "https://cal.com" });
  window.Cal("ui", {
    theme: "dark",
    styles: { branding: { brandColor: "#ffffff" } },
  });

  calInitialized = true;
};

export const openCal = async () => {
  if (typeof window === "undefined") return;

  const launch = () => {
    if (window.Cal) {
      window.Cal("open", {
        calLink: CAL_LINK,
        config: CAL_CONFIG,
      });
    } else {
      window.open(`https://cal.com/${CAL_LINK}`, "_blank", "noopener");
    }
  };

  try {
    await loadCalScript();
    initCal();
  } catch (error) {
    console.error("Unable to load Cal.com embed", error);
  } finally {
    launch();
  }
};

