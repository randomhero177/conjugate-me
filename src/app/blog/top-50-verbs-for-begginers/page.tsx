import Link from "next/link";
import { PagesUrl } from "@/data/urls";

export default function Top50SpanishVerbs() {
  const verbs = [
    { verb: "ser", translation: "to be", example: "Yo soy estudiante." },
    {
      verb: "estar",
      translation: "to be (temporary)",
      example: "Estoy feliz hoy.",
    },
    { verb: "tener", translation: "to have", example: "Tengo dos hermanos." },
    { verb: "ir", translation: "to go", example: "Voy al mercado." },
    { verb: "hacer", translation: "to do/make", example: "Hago mi tarea." },
    {
      verb: "poder",
      translation: "can / to be able to",
      example: "Puedo hablar español.",
    },
    { verb: "decir", translation: "to say/tell", example: "Digo la verdad." },
    { verb: "venir", translation: "to come", example: "Vengo de la escuela." },
    { verb: "hablar", translation: "to speak", example: "Hablo con mi amigo." },
    {
      verb: "trabajar",
      translation: "to work",
      example: "Trabajo todos los días.",
    },
    { verb: "estudiar", translation: "to study", example: "Estudio español." },
    {
      verb: "mirar",
      translation: "to look/watch",
      example: "Miro la televisión.",
    },
    { verb: "escuchar", translation: "to listen", example: "Escucho música." },
    { verb: "comer", translation: "to eat", example: "Como una manzana." },
    { verb: "beber", translation: "to drink", example: "Bebo agua." },
    { verb: "vivir", translation: "to live", example: "Vivo en Madrid." },
    {
      verb: "escribir",
      translation: "to write",
      example: "Escribo una carta.",
    },
    { verb: "leer", translation: "to read", example: "Leo un libro." },
    {
      verb: "gustar",
      translation: "to like",
      example: "Me gusta el chocolate.",
    },
    { verb: "necesitar", translation: "to need", example: "Necesito ayuda." },
    {
      verb: "querer",
      translation: "to want/love",
      example: "Quiero aprender español.",
    },
    {
      verb: "saber",
      translation: "to know (facts)",
      example: "Sé la respuesta.",
    },
    {
      verb: "conocer",
      translation: "to know/meet people",
      example: "Conozco a María.",
    },
    {
      verb: "llevar",
      translation: "to carry/wear",
      example: "Llevo una chaqueta.",
    },
    {
      verb: "llegar",
      translation: "to arrive",
      example: "Llego tarde a clase.",
    },
    {
      verb: "salir",
      translation: "to leave/go out",
      example: "Salgo con mis amigos.",
    },
    { verb: "entrar", translation: "to enter", example: "Entro en la tienda." },
    {
      verb: "poner",
      translation: "to put/place",
      example: "Pongo el libro en la mesa.",
    },
    { verb: "traer", translation: "to bring", example: "Traigo comida." },
    { verb: "comprar", translation: "to buy", example: "Compro ropa." },
    { verb: "vender", translation: "to sell", example: "Vendo mi bicicleta." },
    { verb: "abrir", translation: "to open", example: "Abro la puerta." },
    { verb: "cerrar", translation: "to close", example: "Cierro la ventana." },
    { verb: "caminar", translation: "to walk", example: "Camino al parque." },
    { verb: "correr", translation: "to run", example: "Corro cada mañana." },
    { verb: "dormir", translation: "to sleep", example: "Duermo ocho horas." },
    {
      verb: "despertar",
      translation: "to wake up",
      example: "Me despierto temprano.",
    },
    { verb: "jugar", translation: "to play", example: "Juego fútbol." },
    { verb: "aprender", translation: "to learn", example: "Aprendo español." },
    { verb: "enseñar", translation: "to teach", example: "Enseño inglés." },
    { verb: "llamar", translation: "to call", example: "Llamo a mi mamá." },
    { verb: "viajar", translation: "to travel", example: "Viajo a España." },
    {
      verb: "preguntar",
      translation: "to ask",
      example: "Pregunto la dirección.",
    },
    {
      verb: "responder",
      translation: "to answer",
      example: "Respondo la pregunta.",
    },
    { verb: "ayudar", translation: "to help", example: "Ayudo a mi amigo." },
    { verb: "trabajar", translation: "to work", example: "Trabajo mucho." },
    {
      verb: "esperar",
      translation: "to wait/hope",
      example: "Espero el autobús.",
    },
    { verb: "cambiar", translation: "to change", example: "Cambio de ropa." },
    { verb: "usar", translation: "to use", example: "Uso la computadora." },
    { verb: "llegar", translation: "to arrive", example: "Llego a tiempo." },
    { verb: "entrar", translation: "to enter", example: "Entro en la clase." },
    {
      verb: "recordar",
      translation: "to remember",
      example: "Recuerdo tu nombre.",
    },
    { verb: "olvidar", translation: "to forget", example: "Olvido la tarea." },
    { verb: "cerrar", translation: "to close", example: "Cierro la puerta." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 prose prose-slate pt-32">
      <h1 className="text-4xl font-bold mb-6">
        Top 50 Spanish Verbs Every Beginner Must Know
      </h1>
      <p>
        Learning Spanish verbs is essential for building a solid foundation in
        the language. Mastering these 50 verbs will allow you to communicate
        effectively in everyday situations.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        How to Use This List
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Group verbs by regularity or endings (-ar, -er, -ir) for easier
          memorization.
        </li>
        <li>Use flashcards or spaced repetition apps to practice daily.</li>
        <li>Create simple sentences using each verb to reinforce memory.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        The 50 Must-Know Verbs
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
                <td className="border px-4 py-2">{v.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Tips for Mastering These Verbs
      </h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Learn verbs in context rather than in isolation.</li>
        <li>Focus on irregular verbs first, then move to regular ones.</li>
        <li>Practice forming short sentences daily.</li>
        <li>Track your progress and revisit challenging verbs often.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>
      <p>
        By learning these 50 essential Spanish verbs, you'll have a strong
        foundation for everyday conversations. Revisit and practice them
        regularly, and you'll notice your Spanish improving fast!
      </p>
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
    </div>
  );
}
