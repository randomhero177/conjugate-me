export default function SerVsEstar() {
  const serExamples = [
    {
      situation: "Identity / profession",
      example: "Soy profesor. (I am a teacher.)",
    },
    {
      situation: "Origin / nationality",
      example: "Soy de México. (I am from Mexico.)",
    },
    {
      situation: "Permanent characteristics",
      example: "Ella es alta y simpática. (She is tall and friendly.)",
    },
    {
      situation: "Time and date",
      example:
        "Son las ocho. Hoy es lunes. (It’s eight o’clock. Today is Monday.)",
    },
    {
      situation: "Possession",
      example: "El libro es mío. (The book is mine.)",
    },
    {
      situation: "Material / what something is made of",
      example: "La mesa es de madera. (The table is made of wood.)",
    },
    {
      situation: "Events (location of)",
      example: "La fiesta es en mi casa. (The party is at my house.)",
    },
  ];

  const estarExamples = [
    {
      situation: "Location (of people or objects)",
      example: "Estoy en casa. (I’m at home.)",
    },
    {
      situation: "Temporary states or emotions",
      example: "Estoy cansado. (I’m tired.)",
    },
    {
      situation: "Health / physical condition",
      example: "Mi abuela está enferma. (My grandmother is sick.)",
    },
    {
      situation: "Present continuous (ongoing actions)",
      example: "Estoy estudiando. (I’m studying.)",
    },
    {
      situation: "Temporary situations or changes",
      example: "El café está frío. (The coffee is cold.)",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 prose prose-slate pt-32">
      <h1 className="text-4xl font-bold mb-6">
        Ser vs Estar: The Ultimate Guide to “To Be” in Spanish
      </h1>
      <p>
        One of the biggest challenges for Spanish learners is knowing when to
        use <strong>ser</strong> and when to use <strong>estar</strong>. Both
        mean “to be”, but they’re used in different situations — and mixing them
        up can completely change your meaning!
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The Difference Between Ser and Estar
      </h2>
      <p>Think of it like this:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Ser</strong> is used for{" "}
          <em>permanent or essential qualities</em>.
        </li>
        <li>
          <strong>Estar</strong> is used for{" "}
          <em>temporary states or locations</em>.
        </li>
      </ul>
      <p>
        In other words — use <strong>ser</strong> to describe{" "}
        <em>what something is</em>, and <strong>estar</strong> to describe{" "}
        <em>how or where it is</em>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        When to Use <em>Ser</em>
      </h2>
      <p>
        Use <strong>ser</strong> to talk about identity, origin, time, and
        permanent characteristics.
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Situation</th>
              <th className="border px-4 py-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {serExamples.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-4 py-2 font-medium">
                  {item.situation}
                </td>
                <td className="border px-4 py-2 italic">{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        When to Use <em>Estar</em>
      </h2>
      <p>
        Use <strong>estar</strong> to talk about location, emotions, and
        temporary conditions.
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Situation</th>
              <th className="border px-4 py-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {estarExamples.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-4 py-2 font-medium">
                  {item.situation}
                </td>
                <td className="border px-4 py-2 italic">{item.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Common Mistakes</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          ❌ <strong>Estoy aburrido</strong> = I’m bored. ✅{" "}
          <strong>Soy aburrido</strong> = I’m boring.
        </li>
        <li>
          ❌ <strong>La fiesta está en la casa</strong> — correct! (location of
          an event uses <strong>ser</strong>): ✅{" "}
          <strong>La fiesta es en la casa</strong>.
        </li>
        <li>
          ❌ <strong>El café es frío</strong> — not quite! Use{" "}
          <strong>estar</strong> for temporary condition: ✅{" "}
          <strong>El café está frío</strong>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Pro Tip: The DOCTOR and PLACE Trick
      </h2>
      <p>These two acronyms help you remember when to use each verb:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="border rounded-2xl p-4 bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-indigo-600">
            SER — DOCTOR
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>D</strong> – Description
            </li>
            <li>
              <strong>O</strong> – Occupation
            </li>
            <li>
              <strong>C</strong> – Characteristic
            </li>
            <li>
              <strong>T</strong> – Time / Date
            </li>
            <li>
              <strong>O</strong> – Origin
            </li>
            <li>
              <strong>R</strong> – Relationship
            </li>
          </ul>
        </div>
        <div className="border rounded-2xl p-4 bg-white shadow-sm">
          <h3 className="font-semibold text-lg mb-2 text-emerald-600">
            ESTAR — PLACE
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <strong>P</strong> – Position
            </li>
            <li>
              <strong>L</strong> – Location
            </li>
            <li>
              <strong>A</strong> – Action (ongoing)
            </li>
            <li>
              <strong>C</strong> – Condition
            </li>
            <li>
              <strong>E</strong> – Emotion
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Practice Makes Perfect
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Describe yourself using <strong>ser</strong> (e.g. “Soy estudiante,
          soy amable”).
        </li>
        <li>
          Describe how you feel today using <strong>estar</strong> (e.g. “Estoy
          cansado, estoy feliz”).
        </li>
        <li>Mix both: “Soy alto, pero estoy sentado.”</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>
      <p>
        Understanding <strong>ser</strong> and <strong>estar</strong> is key to
        sounding natural in Spanish. Remember —{" "}
        <em>ser = essence, estar = state</em>. With practice, choosing the right
        one will become second nature.
      </p>
      <p>
        Keep practicing with our{" "}
        <a href="/all-verbs" className="text-indigo-600 underline">
          interactive conjugation trainer
        </a>{" "}
        and soon “to be” won’t confuse you anymore!
      </p>
    </div>
  );
}
