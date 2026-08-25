function ChatFooterLinks() {
  return (
    <div className="flex items-center justify-center gap-6 text-xs text-gray-500 py-2 border-t border-gray-200 dark:border-gray-800">
      <button className="flex items-center gap-1 hover:text-red-500">
        🛡️ Report
      </button>
      <button className="flex items-center gap-1 hover:text-red-500">
        💰 Support us
      </button>
    </div>
  );
}

export default ChatFooterLinks;
