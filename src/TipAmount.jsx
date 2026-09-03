import { useContext } from "react";
import { FormContext } from "./App";

export default function TipAmount() {
  const { bill, tip, nopInput, finalCalculation } = useContext(FormContext);
  const { tipAmount } = finalCalculation(bill, tip, nopInput);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-space-mono text-custom-gray-50 font-bold text-sm">
          Tip Amount
        </p>
        <p className="text-custom-gray-400 font-space-mono text-xs">/ person</p>
      </div>
      <p className="text-custom-green-400 font-bold text-2xl font-space-mono">
        ${tipAmount || "0.00"}
      </p>
    </div>
  );
}
