import TipAmount from "./TipAmount";

export default function ResultContainer() {
  return (
    <div className="flex flex-col gap-8 bg-custom-green-900 p-4 rounded-2xl col-start-2">
      <TipAmount />
    </div>
  );
}
