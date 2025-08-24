interface Props {
  selectedOptions: string[];
  mainAction: () => void;
  btnText: string;
  emptyText?: string;
}
const FooterActions = ({
  selectedOptions,
  mainAction,
  btnText,
  emptyText = "Choose verbs you would like to practice",
}: Props) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-cyan-600 text-amber-50 p-4 text-center text-lg">
      {selectedOptions.length ? (
        <button
          onClick={() => mainAction()}
          className="ml-4 px-6 py-2 bg-green-500 text-amber-50 font-bold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition"
        >
          {btnText}
        </button>
      ) : (
        <div>{emptyText}</div>
      )}
    </div>
  );
};

export default FooterActions;
