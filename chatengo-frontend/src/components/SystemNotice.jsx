function SystemNotice({ text }) {
  return (
    <div className="mx-4 mt-3 mb-2 bg-indigo-50 text-indigo-500 text-xs rounded-lg px-3 py-2 flex items-center gap-2">
      🛡️ {text}
    </div>
  );
}

export default SystemNotice;
