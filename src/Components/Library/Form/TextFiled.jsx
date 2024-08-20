import React from "react";

/**
 *
 * @param {string} [title]
 * @param {string} [className] used for external classes [optional]
 * @param {string} [type] used for setting input filed type [optional]
 * @param {any} [...props]
 * @returns
 */

const TextFiled = ({ title, className, type, ...props }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="first-name"
        className="block text-sm font-semibold mb-3 capitalize"
      >
        {title}
      </label>
      <input
        {...props}
        name={title}
        placeholder={title}
        type={type ? type : "text"} //Default type is Text
        className={`w-full p-3 border border-gray-300 rounded-sm  placeholder-gray-400  ${className}`}
      />
    </div>
  );
};

export default TextFiled;
