// lib/ga.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
