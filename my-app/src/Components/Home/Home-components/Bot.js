import React from "react";
import Character from "../../../images/06_両羽上げのポーズ.jpg";

export default function Bot() {
  return (
    <div className="fixed bottom-8 right-8">
      <img src={Character} alt="bot" className="character w-24 h-24 sm:w-36 sm:h-36"/>
    </div>
  );
}
