export default function SelectTipContainer() {
  return (
    <div>
      {/* label */}
      <label className="font-space-mono font-bold text-custom-gray-400">
        Select Tip %
      </label>
      {/* select-container */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono">
          5%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono">
          10%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono">
          15%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono">
          25%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono">
          50%
        </button>
        <button className="bg-slate-100/70 rounded-lg py-2 text-custom-gray-500 font-bold font-space-mono">
          Custom
        </button>
      </div>
    </div>
  );
}
