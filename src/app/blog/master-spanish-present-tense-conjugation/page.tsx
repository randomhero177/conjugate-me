import { PagesUrl } from "@/data/urls";
import Link from "next/link";

export default function ArticleMasterPresent() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10 pt-32">
      <article className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            How to Master Spanish Present Tense Conjugations
          </h1>
          <p className="text-slate-600">
            Learning Spanish can feel overwhelming at first—especially when you
            realize that verbs change depending on the subject. But once you
            understand the
            <span className="font-semibold">
              patterns of present tense conjugations
            </span>
            , you’ll unlock the foundation of Spanish communication.
          </p>
          <p className="text-slate-600">
            In this guide, we’ll explain how the Spanish present tense works,
            cover the most common conjugation endings, and give you practical
            tips to master them quickly.
          </p>
        </header>

        <hr className="border-slate-200" />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why Learn the Present Tense First?
          </h2>
          <p className="text-slate-700">
            The <em>present tense (el presente)</em> is the most frequently used
            tense in Spanish. You’ll use it every day to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              Talk about what you{" "}
              <span className="font-medium">do regularly</span> →{" "}
              <em>Yo estudio español</em> (“I study Spanish”).
            </li>
            <li>
              Describe what is happening{" "}
              <span className="font-medium">right now</span> →{" "}
              <em>Él come pizza</em> (“He is eating pizza”).
            </li>
            <li>
              Express general truths → <em>El sol brilla</em> (“The sun
              shines”).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Step 1: Recognize Verb Types
          </h2>
          <p className="text-slate-700">
            Spanish verbs fall into{" "}
            <span className="font-medium">three categories</span>, based on
            their infinitive ending:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              <span className="font-semibold">-ar</span> verbs → <em>hablar</em>{" "}
              (to speak), <em>estudiar</em> (to study)
            </li>
            <li>
              <span className="font-semibold">-er</span> verbs → <em>comer</em>{" "}
              (to eat), <em>beber</em> (to drink)
            </li>
            <li>
              <span className="font-semibold">-ir</span> verbs → <em>vivir</em>{" "}
              (to live), <em>escribir</em> (to write)
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Step 2: Learn the Regular Endings
          </h2>
          <p className="text-slate-700">
            To conjugate a verb in the present tense, remove the infinitive
            ending (–ar, –er, –ir) and add the correct endings:
          </p>

          <div className="overflow-x-auto rounded-xl ring-1 ring-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-2 font-semibold">Person</th>
                  <th className="px-4 py-2 font-semibold">
                    -AR (<em>hablar</em>)
                  </th>
                  <th className="px-4 py-2 font-semibold">
                    -ER (<em>comer</em>)
                  </th>
                  <th className="px-4 py-2 font-semibold">
                    -IR (<em>vivir</em>)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-2">yo</td>
                  <td className="px-4 py-2">hablo</td>
                  <td className="px-4 py-2">como</td>
                  <td className="px-4 py-2">vivo</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">tú</td>
                  <td className="px-4 py-2">hablas</td>
                  <td className="px-4 py-2">comes</td>
                  <td className="px-4 py-2">vives</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">él/ella/usted</td>
                  <td className="px-4 py-2">habla</td>
                  <td className="px-4 py-2">come</td>
                  <td className="px-4 py-2">vive</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">nosotros/as</td>
                  <td className="px-4 py-2">hablamos</td>
                  <td className="px-4 py-2">comemos</td>
                  <td className="px-4 py-2">vivimos</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">vosotros/as</td>
                  <td className="px-4 py-2">habláis</td>
                  <td className="px-4 py-2">coméis</td>
                  <td className="px-4 py-2">vivís</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">ellos/ellas/ustedes</td>
                  <td className="px-4 py-2">hablan</td>
                  <td className="px-4 py-2">comen</td>
                  <td className="px-4 py-2">viven</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-0.5 flex-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 9v4m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm text-slate-700">
              <span className="font-medium">Tip:</span> -ER and -IR verbs share
              almost the same endings—only the “nosotros” and “vosotros” forms
              differ.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Step 3: Watch Out for Irregular Verbs
          </h2>
          <p className="text-slate-700">
            Some verbs don’t follow the regular rules. The most common ones
            include:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              <span className="font-semibold">ser</span> (to be) →{" "}
              <em>soy, eres, es, somos, sois, son</em>
            </li>
            <li>
              <span className="font-semibold">estar</span> (to be) →{" "}
              <em>estoy, estás, está, estamos, estáis, están</em>
            </li>
            <li>
              <span className="font-semibold">ir</span> (to go) →{" "}
              <em>voy, vas, va, vamos, vais, van</em>
            </li>
            <li>
              <span className="font-semibold">tener</span> (to have) →{" "}
              <em>tengo, tienes, tiene, tenemos, tenéis, tienen</em>
            </li>
          </ul>
          <p className="text-slate-700">
            These verbs are essential in daily conversation, so it’s worth
            memorizing them early.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Step 4: Practice Daily
          </h2>
          <p className="text-slate-700">
            The key to mastering conjugations is{" "}
            <span className="font-medium">consistent practice</span>. Try:
          </p>
          <ol className="list-decimal pl-6 text-slate-700 space-y-1">
            <li>
              <span className="font-medium">Repetition:</span> Write out verb
              tables until they feel natural.
            </li>
            <li>
              <span className="font-medium">Flashcards:</span> Test yourself
              quickly on different verbs.
            </li>
            <li>
              <span className="font-medium">Speak out loud:</span> Say full
              sentences instead of isolated forms.
            </li>
            <li>
              <span className="font-medium">Apps & trainers:</span> Interactive
              practice makes it easier to remember.
            </li>
          </ol>
          <Link
            href={PagesUrl.tense}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
          >
            Practice Present Tense in the Trainer
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">
            Step 5: Apply in Real Sentences
          </h2>
          <p className="text-slate-700">
            Use verbs in <span className="font-medium">context</span> instead of
            memorizing lists:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>
              <em>Yo vivo en Barcelona.</em> (I live in Barcelona.)
            </li>
            <li>
              <em>Nosotros comemos en casa.</em> (We eat at home.)
            </li>
            <li>
              <em>¿Tú hablas inglés?</em> (Do you speak English?)
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">Quick Recap</h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            <li>Learn the three verb groups (–ar, –er, –ir).</li>
            <li>Memorize the regular endings.</li>
            <li>Pay special attention to irregular verbs.</li>
            <li>Practice daily with sentences and tools.</li>
          </ul>
          <p className="text-slate-700">
            Mastering the Spanish present tense will give you the foundation to
            move into past and future tenses with confidence.
          </p>
        </section>

        <footer className="pt-4">
          <Link
            href={PagesUrl.verbs}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Start Practicing Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </footer>
      </article>
    </section>
  );
}
