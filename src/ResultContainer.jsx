import TipAmount from "./TipAmount";
import TotalAmount from "./TotalAmount";
import ResetButton from "./ResetButton";

export default function ResultContainer() {
  return (
    <div className="bg-custom-green-900 p-6 rounded-2xl col-start-2 flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <TipAmount />
        <TotalAmount />
      </div>
      <ResetButton />
    </div>
  );
}
