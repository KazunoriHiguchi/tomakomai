import React from "react";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

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
            <Link
              to="/tomakomai/"
              className="flex justify-center hover:text-green-400"
              onClick={() => props.setIsShow(false)}
            >
              ホームへ
            </Link>
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
              href="https://www.city.tomakomai.hokkaido.jp/contents/bousaimap/#"
              className="flex justify-center hover:text-green-400"
            >
              防災マップ
            </a>
            {/* <Link
              to={"/tomakomai/map"}
              onClick={() => props.setIsShow(false)}
              className="flex justify-center hover:text-green-400"
            >
              災害マップ
            </Link> */}
            {/* <a
              href="https://tch2022.mikan-foundation.org/"
              className="flex justify-center hover:text-green-400"
            >
              私たちについて
            </a> */}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
