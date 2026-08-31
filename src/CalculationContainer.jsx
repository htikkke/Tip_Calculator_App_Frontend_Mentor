import BillInput from "./BillInput.jsx";
import SelectTipContainer from "./SelectTipContainer.jsx";
import NopInput from "./NopInput.jsx";

export default function CalculationContainer() {
  return (
    <div className="flex flex-col gap-8">
      <BillInput />
      <SelectTipContainer />
      <NopInput />
    </div>
  );
}
