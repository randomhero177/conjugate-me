"use client";
/*import SpanishVerbs from "spanish-verbs";*/

export default function Page() {
  const SpanishVerbs = require('spanish-verbs');
  console.log(SpanishVerbs.validTenses);
  console.log(SpanishVerbs.getConjugation('hablar', 'INDICATIVE_PRESENT', 2));
  console.log(SpanishVerbs.getConjugation('hablar', 'INDICATIVE_PRETERITE', 5));

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">a 1</div>
      </main>
  );
}
