import Link from "next/link";

const articles = [
  {
    slug: "master-spanish-present-tense-conjugation",
    title: "Spanish Present Tense Conjugations",
  },
  {
    slug: "spanish-stem-changing-verbs",
    title: "Spanish Stem-Changing Verbs Article",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
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
