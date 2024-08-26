import React from "react";

/**
 *
 * @param {string} [title]
 * @param {string} [className] used for external classes [optional]
 * @param {string} [type] used for setting input filed type [optional]
 * @param {any} [...props]
 * @param {string} [placeholder]
 */

const TextFiled = ({ title, className, placeholder, type, name, ...props }) => {
  return (
    <div>
      {title && (<label
        htmlFor="first-name"
        className="block text-sm font-semibold mb-2.5 capitalize text-dark-blue"
      >
        {title}
      </label>)}
      <input
        {...props}
        name={name ? name : title}
        placeholder={placeholder ? placeholder : title}
        type={type ? type : "text"} //Default type is Text
        className={`w-full p-3 border border-gray-300 rounded-sm  placeholder-gray-400  ${className}`}
      />
    </div>
  );
};

export default TextFiled;