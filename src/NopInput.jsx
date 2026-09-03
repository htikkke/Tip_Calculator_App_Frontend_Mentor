import { useContext } from "react";
import { FormContext } from "./App";

export default function NopInput() {
  const { nopInput, setNopInput } = useContext(FormContext);

  return (
    <div className="flex flex-col">
      {/* label */}
      <div className="flex items-center justify-between">
        <label className="font-space-mono font-bold text-custom-gray-400 mb-2 text-sm">
          Number Of People
        </label>
        {/* error-state */}
        <label
          className={`${nopInput === "0" ? "block" : "hidden"} font-space-mono font-bold text-red-600/70 mb-2 text-sm`}
        >
          Can't be zero
        </label>
      </div>
      {/* input-container */}
      <div className="relative flex items-center">
        <span className="absolute left-4 font-space-mono text-custom-gray-400 text-xl">
          <img src="images/icon-person.svg" />
        </span>
        <input
          onChange={(e) => setNopInput(e.target.value)}
          type="text"
          value={nopInput}
          placeholder="0"
          className={`bg-slate-100/70 outline-none w-full font-space-mono text-right text-custom-gray-400 font-bold px-4 py-2 rounded-lg ${nopInput === "0" ? "border-2" : ""} ${nopInput === "0" ? "border-red-600" : ""}`}
        />
      </div>
    </div>
  );
}
