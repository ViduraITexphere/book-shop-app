import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookMedical,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const audio = new Audio("/assets/sounds/click.wav");
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-transparent text-white flex items-center px-5 py-6 w-full z-10 absolute top-0">
        <div className="flex items-center gap-5 justify-around w-full z-10">
          <h1 className="text-3xl font-bold">Book Store</h1>
          <nav>
            <ul className="flex gap-7 items-center mr-[20vw] uppercase text-md font-bold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <button
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                overflow: "hidden",
                backgroundSize: "cover",
                minWidth: "173px",
                minHeight: "52px",
                zIndex: 1,
                gap: "10px",
                outline: "none",
                backgroundImage: "url('/assets/images/download.svg')",
                clipPath:
                  "polygon(27px 0%, calc(85% - 3px) 0%, 100% 50%, calc(85% - 1px) 100%, 24px 100%, 0% 50%)",
              }}
              className="bg-transparent text-white text-md font-bold py-1 px-5"
            >
              <FontAwesomeIcon icon={faRightToBracket} size="lg" /> SIGN IN
            </button>
            <button
              onClick={() => {
                setIsOpen(true);
                audio.play();
              }}
              className="text-white text-2xl z-30"
            >
              <FontAwesomeIcon icon={faBookMedical} size="xl" />
            </button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
