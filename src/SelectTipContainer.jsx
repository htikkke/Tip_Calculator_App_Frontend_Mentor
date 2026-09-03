import { useContext } from "react";
import { FormContext } from "./App";

export default function SelectTipContainer() {
  const { tip, setTip } = useContext(FormContext);

  return (
    <div>
      {/* label */}
      <label className="font-space-mono font-bold text-custom-gray-400">
        Select Tip %
      </label>
      {/* select-container */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <button
          onClick={() => setTip(5)}
          className={`rounded-lg py-2 font-bold font-space-mono cursor-pointer transition-all ${
            tip === 5
              ? "bg-custom-green-400 text-custom-green-900"
              : "bg-custom-green-900 text-white hover:bg-custom-green-400 hover:text-custom-green-900"
          }`}
        >
          5%
        </button>
        <button
          onClick={() => setTip(10)}
          className={`rounded-lg py-2 font-bold font-space-mono cursor-pointer transition-all ${
            tip === 10
              ? "bg-custom-green-400 text-custom-green-900"
              : "bg-custom-green-900 text-white hover:bg-custom-green-400 hover:text-custom-green-900"
          }`}
        >
          10%
        </button>
        <button
          onClick={() => setTip(15)}
          className={`rounded-lg py-2 font-bold font-space-mono cursor-pointer transition-all ${
            tip === 15
              ? "bg-custom-green-400 text-custom-green-900"
              : "bg-custom-green-900 text-white hover:bg-custom-green-400 hover:text-custom-green-900"
          }`}
        >
          15%
        </button>
        <button
          onClick={() => setTip(25)}
          className={`rounded-lg py-2 font-bold font-space-mono cursor-pointer transition-all ${
            tip === 25
              ? "bg-custom-green-400 text-custom-green-900"
              : "bg-custom-green-900 text-white hover:bg-custom-green-400 hover:text-custom-green-900"
          }`}
        >
          25%
        </button>
        <button
          onClick={() => setTip(50)}
          className={`rounded-lg py-2 font-bold font-space-mono cursor-pointer transition-all ${
            tip === 50
              ? "bg-custom-green-400 text-custom-green-900"
              : "bg-custom-green-900 text-white hover:bg-custom-green-400 hover:text-custom-green-900"
          }`}
        >
          50%
        </button>
        <input
          onChange={(e) => setTip(e.target.value)}
          type="text"
          placeholder="Custom"
          className="w-full bg-slate-100/70 text-cyan-900 font-bold font-space-mono text-lg text-right py-2 px-3 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-gray-500 placeholder:text-center transition-all cursor-pointer"
        />
      </div>
    </div>
  );
}
