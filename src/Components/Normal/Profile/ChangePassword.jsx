import React from "react";
import TextFiled from "../../Library/Form/TextFiled";
import PrimaryButton from "../../Library/Button/PrimaryButton";

const ChangePassword = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-xl mb-5 font-semibold text-dark-blue">
          Update Password
        </h1>
      </header>

      <div>
        <form className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {/* Old Password */}
          <TextFiled title="Old Password" />

          {/* New Password */}
          <TextFiled title="New Password" />

          {/* Submit btn */}
          <PrimaryButton title="Update" type="submit" className="w-fit ms-auto col-span-full"/>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
