import { useContext } from "react";
import { FormContext } from "./App";

export default function ResetButton() {
  const { setBill, setTip, setNopInput, setTotalAmount, setTipAmount } =
    useContext(FormContext);

  const handleReset = () => {
    (setBill(""),
      setTip(0),
      setNopInput(""),
      setTotalAmount(0),
      setTipAmount(0));
  };

  return (
    <button
      onClick={() => handleReset()}
      className="uppercase font-space-mono bg-[#0d686d] text-[#084d51] rounded-lg py-2 px-4 font-bold
    cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all"
    >
      Reset
    </button>
  );
}
