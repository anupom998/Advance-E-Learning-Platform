import React from "react";

/**
 *
 * @param {string} [title]
 * @param {string} [className] used for external classes [optional]
 * @param {any} [...props]
 * @param {string} [placeholder]
 */

const Textarea = ({ title, className, placeholder, type, ...props }) => {
  return (
    <div>
      <label
        htmlFor="first-name"
        className="block text-sm font-semibold mb-2.5 capitalize text-dark-blue"
      >
        {title}
      </label>
      <textarea
        {...props}
        name={title}
        placeholder={placeholder ? placeholder : title}
        className={`w-full p-3 border border-gray-300 rounded-sm  placeholder-gray-400  ${className}`}
      ></textarea>
    </div>
  );
};

export default Textarea;
