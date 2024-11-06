import { IoCloseOutline, IoRemove } from "react-icons/io5";

const Item = ({ isOpen, onClick, question, answer }) => {
  return (
    <div className="py-4">
      <header>
        {/* Klik for at åbne/lukke spørgsmålet */}
        <button onClick={onClick} className="flex items-center justify-between w-full text-left font-semibold py-2">
          <span className="text-black">{question}</span>
          <span className="ml-8 self-start">
            {/* Skift ikon afhængigt af om spørgsmålet er åbent */}
            {isOpen ? <IoCloseOutline className="text-blue-900 text-2xl" /> : <IoRemove className="text-blue-900 text-2xl" />}
          </span>
        </button>
      </header>
      {/* Hvis isOpen er true, vis svaret */}
      {isOpen && (
        <section className="text-sm text-slate-600">
          <p className="pb-3">{answer}</p>
        </section>
      )}
    </div>
  );
};

export default Item;
