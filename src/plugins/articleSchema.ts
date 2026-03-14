export function getArticleSchema({
  title,
  description,
  url,
  publishedAt,
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: "Conjugate Me",
      url: "https://conjugate-me.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Conjugate Me",
      logo: {
        "@type": "ImageObject",
        url: "https://conjugate-me.vercel.app/logo.png",
      },
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}
