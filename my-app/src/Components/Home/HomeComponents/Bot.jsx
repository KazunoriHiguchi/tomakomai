import React from "react";
import Character from "../../../images/06_両羽上げのポーズ.jpg";

export default function Bot() {
  return (
    <div className="fixed bottom-8 right-8">
      <img src={Character} alt="bot" className="character w-16 h-16 sm:w-24 sm:h-24"/>
    </div>
  );
}
