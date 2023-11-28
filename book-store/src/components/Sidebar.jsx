import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const audio = new Audio("/assets/sounds/remove.wav");

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && (
        <>
          {/* This is the overlay that will be displayed when the sidebar is open */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-70"
            style={{ display: "block" }}
          ></div>

          {/* This is the button that will be displayed when the sidebar is open */}
          <button
            onClick={() => {
              setIsOpen(false);
              audio.play();
            }}
            className="fixed top-4 right-4 z-30 text-white text-2xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </>
      )}
      <div
        className={`fixed top-0 right-0 h-full uppercase text-sm font-bold bg-dark w-[20vw] p-10 z-20 text-white transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-700`}
      >
        <ul className="flex flex-col gap-5">
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
      </div>
    </>
  );
}

export default Sidebar;
