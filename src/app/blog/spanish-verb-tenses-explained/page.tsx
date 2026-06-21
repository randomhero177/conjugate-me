import Script from "next/script";
import type { Metadata } from "next";
import { getArticleSchema } from "@/plugins/articleSchema";

const article = {
  title: "Spanish Verb Tenses Explained: Which Tense Should You Learn First?",
  description:
    "A clear guide to Spanish verb tenses. Learn which tense to study first and how to practice Spanish verbs effectively for faster progress.",
  url: "spanish-verb-tenses-explained",
  datePublished: "2026-06-21T10:00:00Z",
};

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
};

export default function SpanishVerbTensesExplained() {
  const schema = getArticleSchema({
    title: article.title,
    description: article.description,
    url: article.url,
    publishedAt: article.datePublished,
  });

  return (
    <>
      <Script
        id="jsonld-spanish-tenses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 lg:py-24 pt-24">
        <header className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Spanish Grammar Strategy
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Spanish Verb Tenses Explained: Which Tense Should You Learn First?
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            One of the biggest mistakes Spanish learners make is trying to learn
            all verb tenses at once. The truth is: you only need to start with a
            few key tenses to become conversational much faster.
          </p>
        </header>

        <section className="space-y-14 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Why Spanish Verb Tenses Feel Overwhelming
            </h2>

            <p className="mt-4">
              Spanish has many verb tenses, but most learners don’t need all of
              them at the beginning. The confusion comes from trying to memorize
              everything instead of focusing on usage frequency.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              Present
              <br />
              Preterite
              <br />
              Imperfect
              <br />
              Future
              <br />
              Conditional
              <br />
              Subjunctive
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Step 1: Start With the Present Tense
            </h2>

            <p className="mt-4">
              The present tense is the foundation of Spanish communication. You
              use it for daily conversations, habits, and basic expression.
            </p>

            <div className="mt-6 rounded-xl bg-blue-50 border border-blue-100 p-6">
              yo hablo
              <br />
              tú hablas
              <br />
              él habla
            </div>

            <p className="mt-4">
              If you master only one tense first, it should be the present
              tense.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Step 2: Learn the Past (Preterite)
            </h2>

            <p className="mt-4">
              The preterite tense is used for completed actions in the past.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              ayer hablé
              <br />
              ayer comí
              <br />
              ayer viví
            </div>

            <p className="mt-4">
              This tense allows you to tell stories and describe events.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Step 3: Add the Imperfect Tense
            </h2>

            <p className="mt-4">
              The imperfect describes habits and background actions in the past.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              cuando era niño…
              <br />
              siempre jugaba…
              <br />
              vivía en…
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Which Tense Should You Learn First?
            </h2>

            <div className="mt-6 space-y-3">
              <p>1. Present tense → communication foundation</p>
              <p>2. Preterite → basic storytelling</p>
              <p>3. Imperfect → natural past expression</p>
            </div>

            <div className="mt-6 rounded-xl bg-green-50 border border-green-100 p-6">
              The fastest path to fluency is not learning everything — it’s
              mastering the most useful tenses first.
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-10 text-white">
            <h2 className="text-2xl font-semibold">
              The Best Way to Learn Spanish Verb Tenses
            </h2>

            <ul className="mt-6 space-y-3 text-indigo-100">
              <li>• Focus on one tense at a time</li>
              <li>• Practice daily instead of long sessions</li>
              <li>• Use active recall instead of reading rules</li>
              <li>• Repeat until it becomes automatic</li>
            </ul>

            <a
              href="/practice-selected"
              className="inline-block mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 hover:bg-gray-100 transition"
            >
              Practice Spanish Verbs →
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
