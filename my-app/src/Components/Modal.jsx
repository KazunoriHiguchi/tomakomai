import React from "react";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Modal(props) {
  if (props.isShow) {
    return (
      <div
        id="overlay"
        onClick={() => props.setIsShow((prevIsShow) => !prevIsShow)}
      >
        <div id="content" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => props.setIsShow((prevIsShow) => !prevIsShow)}>
            <IconContext.Provider
              value={{ size: "2rem", className: "menu-icon" }}
            >
              <IoIosClose />
            </IconContext.Provider>
          </button>
          <div className="flex flex-col gap-6 mt-6">
            <a
              href="https://www.youtube.com/@user-mf3dy4bc2r"
              className="flex justify-center hover:text-green-400"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/city.tomakomai"
              className="flex justify-center hover:text-green-400"
            >
              Facebook
            </a>
            <a
              href="https://www.city.tomakomai.hokkaido.jp/"
              className="flex justify-center hover:text-green-400"
            >
              Contact
            </a>
            <a
              href="https://tch2022.mikan-foundation.org/"
              className="flex justify-center hover:text-green-400"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
