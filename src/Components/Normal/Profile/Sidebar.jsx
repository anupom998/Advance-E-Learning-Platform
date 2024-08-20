import React from "react";
import { useSearchParams } from "react-router-dom";

/**
 * @param {string} [studentName]
 * @param {Array} [links]
 * 
 * Example: [{
              title: "Profile",
              urlParam: "profile"
            },
            {
              title: "Change Password",
              urlParam: "change-password"
            }]
 */

const Sidebar = ({ studentName, links }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <aside className="md:col-span-2  w-full border-r py-10">
      {/* Name */}
      <h1 className="text-xl mb-5 font-semibold px-10">{studentName}</h1>
      <ul className="space-y-0.5">
        {links.map((item, i) => {
          let isActive = searchParams.get("s") === item?.urlParam;

          return (
            <li
              key={i}
              className={`${
                isActive && "bg-[#F8F7FD]"
              } py-3 capitalize px-10 w-full font-semibold text-gray-500 cursor-pointer select-none text-base`}
              onClick={() => setSearchParams({ s: item?.urlParam })}
            >
              {item?.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
