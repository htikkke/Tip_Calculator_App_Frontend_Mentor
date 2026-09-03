import { useState, createContext } from "react";
import CalculationContainer from "./CalculationContainer";
import ResultContainer from "./ResultContainer";

export const FormContext = createContext();

export const finalCalculation = (bill, tip, nop) => {
  const billInput = parseFloat(bill) || 0;
  const tipInput = parseFloat(tip) || 0;
  const peopleCount = parseInt(nop, 10) || 0;

  let totalAmountPerPerson = 0;
  let tipAmountPerPerson = 0;

  if (peopleCount > 0) {
    const totalTip = (billInput * tipInput) / 100;
    tipAmountPerPerson = totalTip / peopleCount;
    totalAmountPerPerson = (billInput + totalTip) / peopleCount;
  }
  return {
    tipAmount: tipAmountPerPerson.toFixed(2),
    totalAmount: totalAmountPerPerson.toFixed(2),
  };
};

export default function App() {
  const [isReset, setIsReset] = useState(false);
  const [nopInput, setNopInput] = useState("");
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);

  return (
    <FormContext.Provider
      value={{
        isReset,
        setIsReset,
        nopInput,
        setNopInput,
        bill,
        setBill,
        tip,
        setTip,
        totalAmount,
        setTotalAmount,
        tipAmount,
        setTipAmount,
        finalCalculation,
      }}
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
