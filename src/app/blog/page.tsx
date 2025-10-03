import Link from "next/link";

const articles = [
  {
    slug: "master-spanish-present-tense-conjugation",
    title: "Spanish Present Tense Conjugations",
  },
];

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/blog/${article.slug}`} className="default-link">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
