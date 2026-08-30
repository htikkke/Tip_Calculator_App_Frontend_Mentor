import CalculationContainer from "./CalculationContainer";
import ResultContainer from "./ResultContainer";

export default function App() {
  return (
    <div
      id="main-container"
      className="w-full max-w-2xl bg-white rounded-2xl p-6"
    >
      <CalculationContainer />
      <ResultContainer />
    </div>
  );
}
