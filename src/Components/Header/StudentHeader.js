import React from "react";
import PrimaryButton from ".././Library/Button/PrimaryButton";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const StudentHeader = () => {
  return (
    <nav className="bg-purple-light border-b sticky top-0 border-gray-400/50 z-20">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="max-h-[5.5rem]" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-purple-dark/20"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-8 md:p-0 mt-4 bg-[#040453] md:bg-transparent md:flex-row md:space-x-5 space-x-0 md:space-y-0 space-y-4 rtl:space-x-reverse md:mt-0 md:border-0">
            {[
              {
                title: "Profile setting",
                route: "/student/profile?s=profile",
              },
              {
                title: "Logout",
                route: "/",
              },
            ].map((btn, i) => (
              <li key={i}>
                <NavLink to={btn?.route}>
                  <PrimaryButton

                    title={btn?.title}
                    className="w-full md:w-fit"
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StudentHeader;
