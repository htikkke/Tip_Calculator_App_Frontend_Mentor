import { useContext } from "react";
import { FormContext } from "./App";

export default function BillInput() {
  const { bill, setBill } = useContext(FormContext);
  return (
    <div className="flex flex-col">
      {/* label */}
      <label className="font-space-mono font-bold text-custom-gray-400 mb-2">
        Bill
      </label>
      {/* input-container */}
      <div className="relative flex items-center">
        <span className="absolute left-4 font-space-mono text-custom-gray-400 text-xl">
          $
        </span>
        <input
          onChange={(e) => setBill(e.target.value)}
          type="text"
          value={bill}
          placeholder="0"
          className="bg-slate-100/70 outline-none w-full font-space-mono text-right text-custom-green-900 font-bold px-4 py-2 rounded-lg
          cursor-pointer focus:border-2 focus:border-custom-green-400"
        />
      </div>
    </div>
  );
}
