export const isDev = import.meta.env.DEV;

// Returns true in production mode
export const isProd = import.meta.env.PROD;

export function trackEvent(
  event: string,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  if (isDev) {
    console.log("[Analytics event]", {
      event: "portfolio_project_click",
      ...params,
    });
  }

  if (isProd) {
    window.dataLayer.push({
      event,
      ...params,
    });
  }
}
