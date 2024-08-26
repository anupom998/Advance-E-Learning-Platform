import React from "react";
import PrimaryButton from ".././Library/Button/PrimaryButton";
import logo from "../../assets/site-logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const StudentHeader = () => {

  const { logout } = useAuth();

  return (
    <nav className="bg-purple-light border-b sticky top-0 border-gray-400/50 z-20">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="max-h-[5.5rem]" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white  rounded-lg xl:hidden  focus:outline-none focus:ring-2 focus:ring-purple-dark/20"
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
        <div className="hidden w-full xl:block xl:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-8 xl:p-0 mt-4 bg-[#040453] xl:bg-transparent xl:flex-row xl:space-x-4 space-x-0 xl:space-y-0 space-y-4 rtl:space-x-reverse xl:mt-0 xl:border-0">
            {[
              {
                title: "My Learning",
                route: "/student/course",
              },
              {
                title: "Home work",
                route: "/student/my-homeworks",
              },
              {
                title: "Watching Video Earn",
                route: "/student/my-earnings",
              },
              {
                title: "Airdrop and Dollar Earn",
                route: "/student/airdrop-earn",
              },
              {

                title: "Profile setting",
                route: "/student/profile?s=profile",
              },
            ].map((btn, i) => (
              <li key={i}>
                <NavLink to={btn?.route}>
                  <PrimaryButton

                    title={btn?.title}
                    className="w-full max-w-3xl block mx-auto xl:w-fit"
                  />
                </NavLink>
              </li>
            ))}

            <li>
              <PrimaryButton
                onClick={logout}
                title='Logout'
                className="w-full max-w-3xl block mx-auto xl:w-fit"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default StudentHeader;