// plugins/ga.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

type GAEventParams = {
  category: string;
  label?: string;
  value?: number;
  [key: string]: any; // for extra custom params like arrays
};

export const event = (action: string, params: GAEventParams) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, params);
};
