import React from "react";

export default function LangList() {
  return (
    <div className="bg-gray-200 pt-12">
      <h2 className="flex justify-center text-xl mb-4">Language</h2>
      <h3 className="flex justify-center">外国人の方はこちら</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 py-12 px-4">
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-tl">
          日本語
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-tr sm:rounded-none">
          English
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2">
          中文
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-none sm:rounded-tr">
          한국어
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-none sm:rounded-bl">
          Español
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2">
          Português
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-bl sm:rounded-none">
          Tiếng Việt
        </button>
        <button className="bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-none sm:rounded-br">
          Tagalog
        </button>
      </div>
    </div>
  );
}
