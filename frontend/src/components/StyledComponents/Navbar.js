import React, { useState } from "react";
import AccountMenu from "./AccountMenu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/userAction";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = localStorage.getItem("userInfo");
  const [isOpen, setIsOpen] = useState(false);

  //Add the toggle function here:
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    // Navbar goes here
    <header>
      <nav>
        <div className="px-4 py-1 mx-auto max-w-7xl">
          <div className="flex justify-between">
            <div className="flex space-x-14">
              <div>
                {/* Website Logo */}
                <a href="/" className="flex items-center px-2 py-4">
                  <span className="px-1 text-2xl font-semibold border-2 border-white md:text-3xl font-montserrat text-lightBg">
                    DD_
                  </span>
                </a>
              </div>
              {/* Primary Navbar items */}
              <div className="items-end hidden space-x-8 md:flex">
                <a
                  href="/features"
                  className="px-2 py-4 text-lg font-normal tracking-wide transition duration-300 font-roboto text-lightBg hover:text-normalBlue"
                >
                  Features
                </a>
                <a
                  href="/about"
                  className="px-2 py-4 text-lg font-normal tracking-wide transition duration-300 font-roboto text-lightBg hover:text-normalBlue"
                >
                  About
                </a>
              </div>
            </div>
            {/* Secondary Navbar items */}
            <div className="items-center hidden space-x-8 md:flex ">
              {userInfo !== null ? (
                <AccountMenu user={JSON.parse(userInfo)} />
              ) : (
                <>
                  <a
                    href="/signin"
                    className="px-2 py-2 text-lg font-normal tracking-wide transition duration-300 font-roboto text-lightBg hover:text-normalBlue"
                  >
                    Log In
                  </a>
                  <a
                    href="/signup"
                    className="px-5 py-2 text-lg font-medium tracking-wide transition duration-300 border-2 rounded-xl font-roboto text-lightBg border-normalBg hover:bg-normalBg"
                  >
                    Sign Up
                  </a>
                </>
              )}
            </div>
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button className="outline-none" onClick={toggle}>
                <svg
                  className="w-8 h-8 text-lightBg hover:text-lightBg"
                  // x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className={isOpen ? "mx-4" : "hidden"}>
          <ul>
            <li>
              <a
                href="/features"
                className="block px-2 py-2 text-lg font-roboto text-lightBg hover:text-lightBlue"
              >
                Features
              </a>
            </li>
            <hr className="mr-4" />
            <li>
              <a
                href="/about"
                className="block px-2 py-2 text-lg font-roboto text-lightBg hover:text-lightBlue"
              >
                About
              </a>
            </li>
            <hr className="mr-4" />
            {userInfo !== null ? (
              <li>
                <a
                  href="/"
                  onClick={logoutHandler}
                  className="block px-2 py-2 text-lg font-roboto text-lightBg hover:text-lightBlue"
                >
                  Log Out
                </a>
              </li>
            ) : (
              <>
                <li>
                  <a
                    href="/signin"
                    className="block px-2 py-2 text-lg font-roboto text-lightBg hover:text-lightBlue"
                  >
                    Log In
                  </a>
                </li>
                <hr className="mr-4" />
                <li>
                  <a
                    href="/signup"
                    className="block px-2 py-2 text-lg font-roboto text-lightBg hover:text-lightBlue"
                  >
                    Sign Up
                  </a>
                </li>
              </>
            )}
            <hr className="mr-4" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
