export default function StemChangingGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Spanish Stem-Changing Verbs: A Complete Beginner’s Guide
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Stem-changing verbs in Spanish are verbs whose stems undergo a vowel
          change in some conjugations. They’re extremely common, and mastering
          them early will dramatically improve your speaking and listening
          skills. This guide gives you a simple overview — without memorizing
          endless tables.
        </p>

        {/* Card Group */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              What Are Stem-Changing Verbs?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In regular verbs, the stem stays the same when conjugating. But
              with <strong>stem-changing verbs</strong>, the vowel inside the
              stem changes for all forms except <strong>nosotros</strong> and
              <strong> vosotros</strong>.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              The Three Types of Changes
            </h2>

            <div className="space-y-6">
              {/* Card */}
              <div className="p-4 bg-gray-50 rounded-xl border">
                <h3 className="text-xl font-medium mb-2 text-gray-800">
                  1. E → IE
                </h3>
                <p className="text-gray-700 mb-2">
                  Examples: <strong>pensar</strong> (to think),{" "}
                  <strong>querer</strong> (to want), <strong>entender</strong>{" "}
                  (to understand)
                </p>
                <p className="text-sm text-gray-600">
                  pensar → yo <strong>pienso</strong>
                </p>
              </div>

              {/* Card */}
              <div className="p-4 bg-gray-50 rounded-xl border">
                <h3 className="text-xl font-medium mb-2 text-gray-800">
                  2. O → UE
                </h3>
                <p className="text-gray-700 mb-2">
                  Examples: <strong>poder</strong> (can),{" "}
                  <strong>dormir</strong> (to sleep), <strong>volver</strong>{" "}
                  (to return)
                </p>
                <p className="text-sm text-gray-600">
                  poder → yo <strong>puedo</strong>
                </p>
              </div>

              {/* Card */}
              <div className="p-4 bg-gray-50 rounded-xl border">
                <h3 className="text-xl font-medium mb-2 text-gray-800">
                  3. E → I
                </h3>
                <p className="text-gray-700 mb-2">
                  Examples: <strong>pedir</strong> (to ask),{" "}
                  <strong>servir</strong> (to serve), <strong>repetir</strong>{" "}
                  (to repeat)
                </p>
                <p className="text-sm text-gray-600">
                  pedir → yo <strong>pido</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Quick Rule You Must Remember
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The stem change happens in all present tense forms **except**:
              <br />
              <span className="font-semibold">nosotros, vosotros</span>
            </p>

            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <p className="text-gray-800">
                Example (querer):
                <br />
                yo <strong>quiero</strong>, tú <strong>quieres</strong>, él{" "}
                <strong>quiere</strong>,
                <br />
                <span className="text-red-600">
                  nosotros queremos ❌ no change
                </span>
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              The Easiest Way to Learn Them
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Group verbs by type (E→IE, O→UE, E→I).</li>
              <li>
                Learn one example really well — others follow the same pattern.
              </li>
              <li>Practice with short sentences, not isolated verbs.</li>
              <li>
                Use them in context: everyday phrases help memory fastest.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Practice Sentences
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>
                • Yo <strong>quiero</strong> aprender más español.
              </p>
              <p>
                • ¿<strong>Puede</strong> usted ayudarme?
              </p>
              <p>
                • Siempre <strong>pido</strong> café por la mañana.
              </p>
              <p>
                • Mis amigos <strong>vuelven</strong> tarde.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
