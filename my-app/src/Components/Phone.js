import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Phone() {
  return (
    <>
      <div className="">
        <h2 className="flex justify-center mt-8 mb-4 text-xl">Number</h2>
        <h3 className="flex justify-center mb-8">お困りの際は</h3>
        <div className="w-3/4 bg-white py-4 sm:my-24 my-12 mx-auto rounded-xl">
          <h3 className="flex justify-center mb-4">苫小牧市役所</h3>
          <div className="flex items-center gap-3 justify-center">
            <IconContext.Provider value={{ size: "2rem" }}>
              <FiPhoneCall />
            </IconContext.Provider>
            <p className="text-black text-2xl lg:text-4xl">0144-32-6111</p>
          </div>
        </div>
      </div>
    </>
  );
}
