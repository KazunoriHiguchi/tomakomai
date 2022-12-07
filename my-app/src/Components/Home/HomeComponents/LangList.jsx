import React from "react";
// import { Link } from "react-router-dom";

export default function LangList() {
  return (
    <div className="bg-gray-200 pt-12">
      <h2 className="flex justify-center text-xl mb-4">Language</h2>
      <h3 className="flex justify-center">外国人の方はこちら</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 py-12 px-4">
        <a
          href="https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-tl"
        >
          日本語
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=en&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-tr sm:rounded-none"
        >
          English
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=zh&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2"
        >
          中文
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=ko&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-none sm:rounded-tr"
        >
          한국어
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=es&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-none sm:rounded-bl"
        >
          Español
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=pt&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2"
        >
          Português
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=vi&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-bl sm:rounded-none"
        >
          Tiếng Việt
        </a>
        <a
          href="https://translate.google.com/translate?sl=ja&tl=tl&u=https://kazunorihiguchi.github.io/tomakomai/"
          className="flex justify-center bg-gray-500 text-white hover:bg-opacity-40 py-2 rounded-none sm:rounded-br"
        >
          Tagalog
        </a>
      </div>
      {/* <div className="bg-blue-400 mx-auto mb-6 w-12 rounded">
        <Link to={"/tomakomai/"} className="justify-center flex text-white">
          戻る
        </Link>
      </div>
      <p className="flex justify-center pb-6 px-6">
        *日本語以外の言語ページから別の言語の翻訳ページに飛ぶ際は、ここの戻るボタンを押してから飛んでください*
      </p> */}
    </div>
  );
}
