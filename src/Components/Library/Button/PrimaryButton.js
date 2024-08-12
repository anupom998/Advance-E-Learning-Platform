import React from "react";

/**
 * @param {string} [title] - The text to display on the button. This is a required prop.
 * @param {string} [className] - Additional CSS classes to apply to the button for custom styling. This is optional.
 * @param {ReactNode} [icon] - A React element representing the icon to display alongside the title. This is optional.
 * @param {object} [props] - Additional properties to be applied to the `<button>` element, such as `onClick`, `disabled`, etc. This is optional.
 */

const PrimaryButton = ({ title, className, icon, ...props }) => {
  return (
    <button
      className={`bg-purple-dark text-white py-2.5 px-5 font-semibold hover:bg-white hover:text-purple-dark transition-all duration-700 rounded capitalize ${className}`}
      {...props}
    >
      {title}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default PrimaryButton;
