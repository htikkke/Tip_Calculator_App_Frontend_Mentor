import { useContext } from "react";
import { FormContext } from "./App";

export default function TotalAmount() {
  const { totalAmount } = useContext(FormContext);
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-space-mono text-custom-gray-50 font-bold text-sm">
          Total Amount
        </p>
        <p className="text-custom-gray-400 font-space-mono text-xs">/ person</p>
      </div>
      <p className="text-custom-green-400 font-bold text-2xl font-space-mono">
        $
        {totalAmount && !isNaN(totalAmount)
          ? Number(totalAmount).toFixed(2)
          : "0.00"}
      </p>
    </div>
  );
}
