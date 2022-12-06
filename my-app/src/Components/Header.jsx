import React from "react";
import Modal from "./Modal";
import Logo from "../images/09_顔のみ.jpg";
import { BsYoutube, BsFacebook } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Header() {
  const [isShow, setIsShow] = React.useState(false);
  const MenuButton = isShow ? (
    <IconContext.Provider value={{ size: "2rem", className: "menu-icon" }}>
      <IoIosClose />
    </IconContext.Provider>
  ) : (
    <IconContext.Provider value={{ size: "2rem", className: "menu-icon" }}>
      <IoIosMenu />
    </IconContext.Provider>
  );
  return (
    <>
      <header className="mt-4 h-16 flex items-center">
        <a href="https://tch2022.mikan-foundation.org/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-16 mt-4" />
          <h1 className="hidden sm:block">TOMAKOMAI CITY HACKATHON</h1>
          <h1 className="sm:hidden">
            TOMAKOMAI CITY <br></br>HACKATHON
          </h1>
        </a>
        <nav className="ml-auto flex gap-4">
          <div className=" relative hidden sm:block ">
            <IconContext.Provider value={{ className: "search-icon" }}>
              <CiSearch />
            </IconContext.Provider>
            <input
              type="text"
              placeholder="search"
              className="border px-5"
            ></input>
          </div>
          <ul className="hidden sm:flex  items-center gap-4 mr-4">
            <IconContext.Provider
              value={{ size: "1.8rem", className: "youtube" }}
            >
              <li>
                <a href="https://www.youtube.com/@user-mf3dy4bc2r">
                  <BsYoutube />
                </a>
              </li>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ size: "1.7rem", className: "facebook" }}
            >
              <li>
                <a href="https://www.facebook.com/city.tomakomai">
                  <BsFacebook />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
          <button
            className="sm:hidden"
            onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
          >
            {MenuButton}
          </button>
        </nav>
      </header>
      <Modal isShow={isShow} setIsShow={setIsShow} />
    </>
  );
}
