import CalculationContainer from "./CalculationContainer";
import ResultContainer from "./ResultContainer";

export default function App() {
  return (
    <>
      <p className="uppercase font-space-mono font-bold text-custom-green-900 tracking-[10px]">
        Spli
        <br />
        tter
      </p>
      <div
        id="main-container"
        className="w-full max-w-2xl mt-16 bg-white rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <CalculationContainer />
        <ResultContainer />
      </div>
    </>
  );
}
