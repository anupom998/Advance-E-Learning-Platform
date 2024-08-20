import React from "react";

/**
 * @param {array} [links] 
 * Example: [
  {
    pageName: "Home",
    route: "/",
  },

  {
    pageName: "Profile",
    route: "/student/profile",
    lock: true, // Lock means the current page route. If its value is true, then it will disable that linkItem.
  },
];
 */

const BreadCrumb = ({links}) => {
  return (
    <div className="text-gray-500 flex justify-center text-sm">
      {links.map((item, i) => (
        <p key={i} className="">
          {i > 0 && <span className="inline-block mx-2">/</span>}

          {item.lock ? (
            <span className="underline">{item.pageName}</span>
          ) : (
            <span className="cursor-pointer">{item.pageName}</span>
          )}
        </p>
      ))}
    </div>
  );
};

export default BreadCrumb;
