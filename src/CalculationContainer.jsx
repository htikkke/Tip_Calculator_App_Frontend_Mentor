import BillInput from "./BillInput.jsx";
import SelectTipContainer from "./SelectTipContainer.jsx";

export default function CalculationContainer() {
  return (
    <div className="flex flex-col gap-3">
      <BillInput />
      <SelectTipContainer />
    </div>
  );
}
