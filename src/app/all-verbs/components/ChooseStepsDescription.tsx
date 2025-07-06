export default function ChooseStepsDescription() {
  return (
    <div className="lg:flex mb-8">
      <div className="group flex-1 flex justify-center bg-white shadow-lg  transition-transform transform hover:scale-105">
        <div className="p-6 flex flex-col items-center">
          <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
            1
          </div>
          <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
            Use text field
          </h2>
          <p className="text-gray-600 text-center">
            You can either search for a specific verb using the input field
          </p>
        </div>
      </div>
      <div className="px-8 text-2xl font-bold text-center my-8 lg:flex items-center">
        or
      </div>

      <div className="group flex-1 flex justify-center bg-white shadow-lg transition-transform transform hover:scale-105">
        <div className="p-6 flex flex-col items-center ">
          <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
            2
          </div>
          <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
            Select a preset
          </h2>
          <p className="text-gray-600 text-center">
            Quickly start practicing by choosing from curated verb sets — like
            most common verbs, regular only, irregular only, or thematic groups.
          </p>
        </div>
      </div>
      <div className="px-8 text-2xl font-bold text-center my-8 lg:flex items-center">
        or
      </div>

      <div className="group flex-1 flex justify-center bg-white shadow-lg transition-transform transform hover:scale-105">
        <div className="p-6 flex flex-col items-center ">
          <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
            3
          </div>
          <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
            Find it in the list of all verbs to select
          </h2>
          <p className="text-gray-600 text-center">
            Scroll through the full list below. Click on a verb to select or
            deselect it.
          </p>
        </div>
      </div>
    </div>
  );
}
