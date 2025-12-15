export default function ConjugationPracticeArticle() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Why Practicing Verb Conjugation Is the Key to Speaking Spanish
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Many Spanish learners understand grammar rules but freeze when it’s
          time to speak. The reason is simple:{" "}
          <strong>
            knowing rules is not the same as being able to use them
          </strong>
          . Verb conjugation only becomes natural through regular, focused
          practice.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Conjugation Is So Important
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Spanish relies heavily on verb endings to communicate
              <strong> who does the action</strong> and{" "}
              <strong>when it happens</strong>. If conjugation isn’t automatic,
              your brain has to stop and think — which breaks fluency.
            </p>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-gray-800">
                Fluent speakers don’t think:
                <br />
                <em>“Is this present or past?”</em>
                <br />
                They simply speak — because the forms are already familiar.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Memorizing Tables Doesn’t Work
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Many learners try to memorize full conjugation tables. This helps
              temporarily, but it doesn’t train your brain for real
              conversation.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Tables are passive — speaking is active.</li>
              <li>Memory fades without repetition.</li>
              <li>Real speech requires instant recall.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              What Actually Works
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              To truly master conjugation, you need{" "}
              <strong>short, repeated, active practice</strong>.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>• Practice one tense at a time</p>
              <p>• Repeat common verbs often</p>
              <p>• Answer quickly, without overthinking</p>
              <p>• Make mistakes and correct them immediately</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              How This App Helps You Practice Effectively
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              This app is designed specifically for{" "}
              <strong>active conjugation practice</strong>. Instead of reading
              tables, you train your brain to produce the correct verb form
              quickly.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Focus on the most important verbs</li>
              <li>Choose specific tenses</li>
              <li>Practice in short sessions</li>
              <li>Build speed and confidence</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Just 10 Minutes a Day Makes a Difference
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Consistency matters more than duration. Even{" "}
              <strong>10 minutes a day</strong> of focused conjugation practice
              can dramatically improve your speaking ability within weeks.
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href="/all-verbs"
                className="inline-flex items-center justify-center rounded-xl
                           bg-blue-600 px-6 py-3 text-white font-medium
                           hover:bg-blue-700 transition"
              >
                Start Practicing Conjugation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
