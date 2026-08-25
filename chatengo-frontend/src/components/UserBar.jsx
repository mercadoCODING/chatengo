function StrangerBar({ online = true, onEnd }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm">
          👥
        </div>
        <div className="text-left">
          <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
            Stranger
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Stranger is online
          </p>
        </div>
      </div>
    </div>
  );
}

export default StrangerBar;
