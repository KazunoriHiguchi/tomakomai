import React from "react";
import License from "../images/00_ロゴ(コピーライト入り).JPG";

export default function Footer() {
  return (
    <footer className="my-6">
      <div className="flex justify-center">
        <img src={License} alt="license" className="w-16" />
      </div>
    </footer>
  );
}
