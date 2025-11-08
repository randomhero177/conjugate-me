import Link from "next/link";

const articles = [
  {
    slug: "master-spanish-present-tense-conjugation",
    title: "Spanish Present Tense Conjugations",
  },
  {
    slug: "top-50-verbs-for-begginers",
    title: "Top 50 Spanish Verbs Every Beginner Must Know",
  },
  {
    slug: "action-verbs-for-daily-life",
    title: "Action Verbs for Daily Life",
  },
  {
    slug: "ser-vs-estar",
    title: "Ser vs Estar",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto pt-32 px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block p-6 rounded-2xl shadow-md hover:shadow-lg bg-white transition transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
