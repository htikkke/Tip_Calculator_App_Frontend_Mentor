export default function SelectTipContainer() {
  return (
    <div>
      {/* label */}
      <label className="font-space-mono font-bold text-custom-gray-400">
        Select Tip %
      </label>
      {/* select-container */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <button
          className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono
        cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all"
        >
          5%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all">
          10%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all">
          15%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all">
          25%
        </button>
        <button className="bg-custom-green-900 rounded-lg py-2 text-white font-bold font-space-mono cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all">
          50%
        </button>
        <button className="bg-slate-100/70 rounded-lg py-2 text-custom-gray-500 font-bold font-space-mono cursor-pointer hover:bg-custom-green-400 hover:text-custom-green-900 transition-all">
          Custom
        </button>
      </div>
    </div>
  );
}
