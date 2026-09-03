import { useState, createContext } from "react";
import CalculationContainer from "./CalculationContainer";
import ResultContainer from "./ResultContainer";

export const FormContext = createContext();

export default function App() {
  const [isReset, setIsReset] = useState(false);
  const [nopInput, setNopInput] = useState("");

  return (
    <FormContext.Provider
      value={{ isReset, setIsReset, nopInput, setNopInput }}
    >
      <div className="w-full min-h-screen bg-custom-gray-200 flex flex-col items-center justify-center">
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
      </div>
    </FormContext.Provider>
  );
}
