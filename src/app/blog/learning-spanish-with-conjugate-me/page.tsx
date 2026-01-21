export default function LearningSpanishWithConjugateMe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 pt-32">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Learning Spanish with Conjugate Me: A Smarter Way to Practice Verbs
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Learning Spanish can feel overwhelming — verb tenses, irregular forms,
          and endless conjugation tables. Many learners understand the rules but
          struggle to use verbs naturally when speaking. That’s exactly the
          problem <strong>Conjugate Me</strong> was built to solve.
        </p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Verb Conjugation Is the Core of Spanish
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In Spanish, verb conjugation carries critical information: who is
              doing the action, when it happens, and sometimes even the
              speaker’s attitude. Without solid conjugation skills, it becomes
              difficult to speak fluently or understand native speakers.
            </p>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-gray-800">
                Vocabulary helps you recognize words, but conjugation is what
                allows you to build real sentences.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              The Problem with Traditional Learning Methods
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Many textbooks and courses rely heavily on memorizing conjugation
              tables. While this can help you understand patterns, it rarely
              prepares you for real-life conversation.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Tables encourage passive learning</li>
              <li>Recall is slow when speaking</li>
              <li>Knowledge fades without repetition</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              How Conjugate Me Helps You Learn Spanish
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Conjugate Me focuses on <strong>active verb practice</strong>.
              Instead of reading or memorizing, you train your brain to produce
              the correct verb form quickly — the same way you need to do in
              real conversations.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Practice the most common Spanish verbs</li>
              <li>Choose specific tenses to focus on</li>
              <li>Train short-term and long-term memory</li>
              <li>Build speed and confidence</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              A Simple Daily Routine That Works
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              You don’t need hours of study. A short daily routine is far more
              effective:
            </p>

            <div className="space-y-3 text-gray-700">
              <p>• Pick one tense</p>
              <p>• Practice 5–10 common verbs</p>
              <p>• Answer quickly, without overthinking</p>
              <p>• Repeat the next day</p>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-gray-800">
                Even 10 minutes a day can lead to noticeable improvement within
                a few weeks.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Who Is Conjugate Me For?
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Beginners learning Spanish verb basics</li>
              <li>Intermediate learners fixing weak conjugation skills</li>
              <li>Students preparing for exams</li>
              <li>Anyone who wants to speak more confidently</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Start Learning Spanish with Conjugate Me
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              If you want to stop guessing verb forms and start speaking Spanish
              with confidence, focused conjugation practice is the fastest way
              forward.
            </p>

            <div className="flex justify-center">
              <a
                href="/practice"
                className="inline-flex items-center justify-center rounded-xl
                           bg-blue-600 px-6 py-3 text-white font-medium
                           hover:bg-blue-700 transition"
              >
                Practice Spanish Verbs for Free
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
