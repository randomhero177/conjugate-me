import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Spanish Conjugation Mistakes (And How to Stop Making Them)",
  description:
    "Discover the most common Spanish conjugation mistakes learners make and how to fix them. Practical examples, explanations, and daily practice tips.",
  keywords: [
    "Spanish conjugation mistakes",
    "common Spanish verb errors",
    "Spanish verb conjugation problems",
    "Spanish grammar mistakes",
    "how to fix Spanish conjugation",
  ],
  openGraph: {
    title: "Common Spanish Conjugation Mistakes (And How to Stop Making Them)",
    description:
      "Learn the most frequent Spanish verb conjugation errors and how to avoid them with smart practice.",
    type: "article",
  },
};

export default function CommonSpanishConjugationMistakes() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        <header className="mb-14">
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Common Spanish Conjugation Mistakes (And How to Stop Making Them)
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            If you keep getting Spanish verb conjugations wrong, you're not
            alone. Even intermediate learners repeat the same patterns of
            mistakes. Let’s break down the most common ones — and fix them
            permanently.
          </p>
        </header>

        <section className="space-y-16 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Mixing Up Ser and Estar
            </h2>

            <p className="mt-4">
              One of the most common conjugation mistakes is using the wrong
              form of <span className="font-semibold">ser</span> and{" "}
              <span className="font-semibold">estar</span>.
            </p>

            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-6">
              <p className="font-semibold text-red-700">Incorrect:</p>
              <p className="mt-2">Estoy profesor.</p>
            </div>

            <div className="mt-4 rounded-xl border border-green-100 bg-green-50 p-6">
              <p className="font-semibold text-green-700">Correct:</p>
              <p className="mt-2">Soy profesor.</p>
            </div>

            <p className="mt-6">
              Learners often translate directly from English (“I am a teacher”),
              but Spanish distinguishes between permanent identity (ser) and
              temporary states (estar).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Forgetting Stem Changes
            </h2>

            <p className="mt-4">
              Many verbs change in the stem, not just the ending.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              <p>
                Pensar → pienso (not "penso")
                <br />
                Poder → puedo (not "podo")
                <br />
                Pedir → pido (not "pedo")
              </p>
            </div>

            <p className="mt-6">
              This mistake happens because learners memorize endings but ignore
              internal vowel changes. Stem-changing verbs must be practiced
              repeatedly to become automatic.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Using the Infinitive Instead of Conjugating
            </h2>

            <p className="mt-4">A classic beginner-to-intermediate error:</p>

            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-6">
              <p className="font-semibold text-red-700">Incorrect:</p>
              <p className="mt-2">Yo hablar español.</p>
            </div>

            <div className="mt-4 rounded-xl border border-green-100 bg-green-50 p-6">
              <p className="font-semibold text-green-700">Correct:</p>
              <p className="mt-2">Yo hablo español.</p>
            </div>

            <p className="mt-6">
              This usually happens under pressure while speaking. The brain
              grabs the dictionary form instead of retrieving the correct
              conjugation. The fix? Active recall practice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Confusing Preterite and Imperfect
            </h2>

            <p className="mt-4">Even strong learners mix these past tenses.</p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              <p>
                Ayer comí pizza. (Completed action)
                <br />
                Cuando era niño, comía pizza todos los días. (Habit in the past)
              </p>
            </div>

            <p className="mt-6">
              This is not just a tense problem — it's a meaning problem.
              Understanding context is essential before choosing the form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Ignoring Irregular “Yo” Forms
            </h2>

            <p className="mt-4">
              Some verbs look regular — until the “yo” form.
            </p>

            <div className="mt-6 rounded-xl bg-gray-100 p-6">
              <p>
                Tener → tengo
                <br />
                Hacer → hago
                <br />
                Salir → salgo
              </p>
            </div>

            <p className="mt-6">
              These patterns are predictable, but only if you practice them
              intentionally.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-10 text-white">
            <h2 className="text-2xl font-semibold">
              How to Eliminate These Mistakes for Good
            </h2>

            <ul className="mt-6 space-y-3 text-indigo-100">
              <li>• Stop passive reading — start active recall.</li>
              <li>• Practice small sets of verbs daily.</li>
              <li>• Focus on weak spots (stem changes, irregular yo forms).</li>
              <li>• Repeat until recall becomes automatic.</li>
            </ul>

            <p className="mt-6 text-indigo-100">
              Consistent micro-practice is what transforms knowledge into
              fluency.
            </p>

            <a
              href="/all-verbs"
              className="inline-block mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-gray-100"
            >
              Practice Spanish Conjugation Now →
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Final Thoughts
            </h2>
            <p className="mt-4">
              Most Spanish conjugation mistakes aren’t caused by lack of
              intelligence — they’re caused by lack of structured repetition.
            </p>
            <p className="mt-4">
              If you train verbs actively and consistently, these errors
              disappear naturally.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
