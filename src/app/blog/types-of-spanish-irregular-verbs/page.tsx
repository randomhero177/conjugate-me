import Script from "next/script";
import type { Metadata } from "next";
import { getArticleSchema } from "@/plugins/articleSchema";

const article = {
  title: "The 7 Types of Spanish Irregular Verbs (And How to Master Them)",
  description:
    "Spanish irregular verbs are easier to learn when grouped into patterns. Discover the 7 main types of irregular verbs and how to practice them effectively.",
  url: "types-of-spanish-irregular-verbs",
  publishedAt: "2026-03-15",
};

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
};

export default function TypesOfSpanishIrregularVerbs() {
  const schema = getArticleSchema({
    title: article.title,
    description: article.description,
    url: article.url,
    publishedAt: article.publishedAt,
  });

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 lg:py-32 bg-white">
        <header className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
            Spanish Verb Mastery
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The 7 Types of Spanish Irregular Verbs (And How to Master Them)
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Spanish irregular verbs look chaotic at first. But in reality, most
            of them follow recognizable patterns. Once you learn these patterns,
            mastering irregular verbs becomes dramatically easier.
          </p>
        </header>

        <section className="space-y-14 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Stem-Changing Verbs (e → ie)
            </h2>

            <p className="mt-4">
              These verbs change a vowel in the stem when conjugated.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              pensar → pienso
              <br />
              cerrar → cierro
              <br />
              empezar → empiezo
            </div>

            <p className="mt-4">
              This is one of the most common irregular patterns in Spanish.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Stem-Changing Verbs (o → ue)
            </h2>

            <p className="mt-4">
              Another extremely common pattern where “o” becomes “ue”.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              poder → puedo
              <br />
              dormir → duermo
              <br />
              volver → vuelvo
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Stem-Changing Verbs (e → i)
            </h2>

            <p className="mt-4">Some verbs change “e” to “i” in the stem.</p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              pedir → pido
              <br />
              servir → sirvo
              <br />
              repetir → repito
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. “Yo-Go” Verbs
            </h2>

            <p className="mt-4">
              These verbs are irregular only in the “yo” form.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              tener → tengo
              <br />
              hacer → hago
              <br />
              salir → salgo
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Orthographic Changes
            </h2>

            <p className="mt-4">
              Some verbs change spelling to preserve pronunciation.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              buscar → busqué
              <br />
              pagar → pagué
              <br />
              empezar → empecé
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Completely Irregular Verbs
            </h2>

            <p className="mt-4">
              A few verbs do not follow any clear pattern and must be memorized.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              ser → soy
              <br />
              ir → voy
              <br />
              estar → estoy
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Future and Conditional Stem Changes
            </h2>

            <p className="mt-4">
              Some verbs change their stem in future and conditional tenses.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              tener → tendré
              <br />
              salir → saldré
              <br />
              hacer → haré
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-10 text-white">
            <h2 className="text-2xl font-semibold">
              The Best Way to Master Irregular Verbs
            </h2>

            <p className="mt-4 text-indigo-100">
              Instead of memorizing massive verb tables, focus on patterns and
              practice actively.
            </p>

            <ul className="mt-6 space-y-3 text-indigo-100">
              <li>• Train verbs by pattern groups</li>
              <li>• Practice daily in short sessions</li>
              <li>• Focus on recall, not recognition</li>
            </ul>

            <a
              href="/"
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
