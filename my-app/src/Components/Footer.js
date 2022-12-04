import React from "react";
import License from "../images/00_ロゴ(コピーライト入り).JPG";

export default function Footer() {
  return (
    <footer className="bg-black py-6 flex flex-col gap-12">
      <h3 className="text-white flex  justify-center">TOMAKOMAI CITY HACKATHON</h3>
      <div className="text-white">
        <h4 className="flex justify-center">TEAM 「勝ちます」</h4>
        <h5 className="flex justify-center">Member</h5>
        <div className="flex justify-center gap-4">
          <div>Sho</div>
          <div>Shogo</div>
          <div>Aguilar</div>
          <div>Kazu</div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={License} alt="license" className="w-16" />
      </div>
    </footer>
  );
}
