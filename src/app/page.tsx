import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Master Spanish Verb Conjugations in 3 Easy Steps
      </h1>
      <div className="max-w-4xl grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        <Link href="/all-verbs" className="group">
          <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-700 rounded-full">
              1
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Choose Your Verbs
            </h2>
            <p className="text-gray-600 text-center">
              Select one or multiple verbs from the list to include in your
              practice session.
            </p>
          </div>
        </Link>

        <Link href="/choose-tense" className="group">
          <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-700 rounded-full">
              2
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Pick a Tense
            </h2>
            <p className="text-gray-600 text-center">
              Choose one or multiple tenses to practice—present, past, future,
              and more!
            </p>
          </div>
        </Link>

        <Link href="/practice-selected" className="group">
          <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-700 rounded-full">
              3
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Start Practicing!
            </h2>
            <p className="text-gray-600 text-center">
              Type in the correct conjugation. If you're wrong, try again or
              reveal the correct answer.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
