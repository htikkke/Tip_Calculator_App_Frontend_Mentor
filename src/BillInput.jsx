export default function BillInput() {
  return (
    <div className="flex flex-col">
      {/* label */}
      <label className="font-space-mono font-bold text-custom-gray-400 mb-2">
        Bill
      </label>
      {/* input-container */}
      <div className="relative flex items-center">
        <span className="absolute left-4 font-space-mono text-custom-gray-400 text-xl">
          $
        </span>
        <input
          type="text"
          placeholder="0"
          className="bg-slate-100/70 outline-none w-full font-space-mono text-right text-custom-gray-400 font-bold px-4 py-2 rounded-lg
          cursor-pointer focus:border-2 focus:border-custom-green-400"
        />
      </div>
    </div>
  );
}
