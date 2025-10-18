export default function ActionVerbsForDailyLife() {
  const verbs = [
    {
      verb: "comer",
      translation: "to eat",
      example: "Como pan y frutas por la mañana.",
    },
    { verb: "beber", translation: "to drink", example: "Bebo café cada día." },
    {
      verb: "caminar",
      translation: "to walk",
      example: "Camino al trabajo todos los días.",
    },
    {
      verb: "correr",
      translation: "to run",
      example: "Corro en el parque los fines de semana.",
    },
    {
      verb: "dormir",
      translation: "to sleep",
      example: "Duermo ocho horas cada noche.",
    },
    {
      verb: "despertar(se)",
      translation: "to wake up",
      example: "Me despierto a las siete de la mañana.",
    },
    {
      verb: "lavar(se)",
      translation: "to wash (oneself)",
      example: "Me lavo las manos antes de comer.",
    },
    {
      verb: "vestir(se)",
      translation: "to get dressed",
      example: "Me visto rápido por la mañana.",
    },
    {
      verb: "trabajar",
      translation: "to work",
      example: "Trabajo en una oficina.",
    },
    {
      verb: "estudiar",
      translation: "to study",
      example: "Estudio español por la tarde.",
    },
    {
      verb: "leer",
      translation: "to read",
      example: "Leo un libro antes de dormir.",
    },
    {
      verb: "escribir",
      translation: "to write",
      example: "Escribo correos electrónicos cada día.",
    },
    {
      verb: "hablar",
      translation: "to speak",
      example: "Hablo con mis amigos por teléfono.",
    },
    {
      verb: "escuchar",
      translation: "to listen",
      example: "Escucho música cuando cocino.",
    },
    {
      verb: "mirar",
      translation: "to watch",
      example: "Miro series en Netflix.",
    },
    {
      verb: "comprar",
      translation: "to buy",
      example: "Compro comida en el supermercado.",
    },
    {
      verb: "vender",
      translation: "to sell",
      example: "Vendo productos en línea.",
    },
    {
      verb: "cocinar",
      translation: "to cook",
      example: "Cocino pasta para la cena.",
    },
    {
      verb: "limpiar",
      translation: "to clean",
      example: "Limpio mi casa los sábados.",
    },
    {
      verb: "viajar",
      translation: "to travel",
      example: "Viajo a la playa en verano.",
    },
    {
      verb: "manejar",
      translation: "to drive",
      example: "Manejo al trabajo cada mañana.",
    },
    {
      verb: "tomar",
      translation: "to take / to drink",
      example: "Tomo el autobús al centro.",
    },
    {
      verb: "llamar",
      translation: "to call",
      example: "Llamo a mi madre todos los domingos.",
    },
    {
      verb: "ayudar",
      translation: "to help",
      example: "Ayudo a mis compañeros de trabajo.",
    },
    {
      verb: "abrir",
      translation: "to open",
      example: "Abro la ventana cuando hace calor.",
    },
    {
      verb: "cerrar",
      translation: "to close",
      example: "Cierro la puerta antes de salir.",
    },
    {
      verb: "poner",
      translation: "to put/place",
      example: "Pongo la mesa para cenar.",
    },
    {
      verb: "sacar",
      translation: "to take out",
      example: "Saco la basura por la noche.",
    },
    {
      verb: "entrar",
      translation: "to enter",
      example: "Entro en la oficina a las nueve.",
    },
    {
      verb: "salir",
      translation: "to go out / to leave",
      example: "Salgo con mis amigos los viernes.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 prose prose-slate pt-32">
      <h1 className="text-4xl font-bold mb-6">
        Spanish Action Verbs for Daily Life
      </h1>
      <p>
        Action verbs are at the heart of everyday Spanish. They describe what
        you <strong>do</strong> — from eating breakfast to going out with
        friends. Learning these verbs will help you build natural, practical
        sentences for real-life situations.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Action Verbs Matter
      </h2>
      <p>
        When you talk about your daily routine, your hobbies, or your work —
        you’re using action verbs all the time. Mastering them means you’ll be
        able to express what you do, when, and how.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Everyday Action Verbs
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Verb</th>
              <th className="border px-4 py-2 text-left">Translation</th>
              <th className="border px-4 py-2 text-left">Example</th>
            </tr>
          </thead>
          <tbody>
            {verbs.map((v, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border px-4 py-2 font-medium">{v.verb}</td>
                <td className="border px-4 py-2">{v.translation}</td>
                <td className="border px-4 py-2 italic">{v.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Tips for Learning Action Verbs
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Visualize</strong> the action — imagine yourself doing it.
        </li>
        <li>
          <strong>Connect</strong> verbs to your own life: “Trabajo en una
          oficina”, “Cocino pasta”.
        </li>
        <li>
          <strong>Repeat aloud</strong> to improve pronunciation and memory.
        </li>
        <li>
          <strong>Use them in phrases</strong> instead of memorizing them alone.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Practice Ideas</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Write about your daily routine using at least 10 verbs from this list.
        </li>
        <li>Record yourself describing your morning in Spanish.</li>
        <li>
          Use flashcards or an app (like <em>Conjugate Me</em> 😉) to practice
          conjugations.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>
      <p>
        These everyday action verbs are essential to communicate naturally in
        Spanish. The more you use them in context, the faster you’ll sound
        fluent. Practice daily, and soon Spanish will feel like second nature!
      </p>
    </div>
  );
}
