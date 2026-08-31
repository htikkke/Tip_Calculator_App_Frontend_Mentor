export default function TipAmount() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="font-space-mono text-custom-gray-50 font-bold text-sm">
          Tip Amount
        </p>
        <p className="text-custom-gray-400 font-space-mono text-xs">/ person</p>
      </div>
      <p className="text-custom-green-400 font-bold text-2xl font-space-mono">
        $0.00
      </p>
    </div>
  );
}
