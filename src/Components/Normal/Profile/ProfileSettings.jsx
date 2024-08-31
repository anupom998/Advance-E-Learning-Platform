import React from "react";
import userImg from "../../.././assets/user/user.png";
import TextFiled from "../../Library/Form/TextFiled";
import Textarea from "../../Library/Form/Textarea";
import PrimaryButton from "../../Library/Button/PrimaryButton";

const ProfileSettings = () => {
  const previewImgRef = React.useRef(null);

  const handleUploadedImgPreview = (e) => {
    const img = URL.createObjectURL(e.target.files[0]);
    previewImgRef.current.src = img;
  };

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-xl mb-5 font-semibold text-dark-blue">Profile</h1>

      <form className="space-y-5">
        {/* Profile image upload */}
        <div className="flex mb-8 gap-3">
          <div>
            <label htmlFor="user-img">
              <div className="mx-auto w-24 text-center ">
                <div className="relative w-24">
                  {/* Preview of uploaded img */}
                  <img
                    ref={previewImgRef}
                    className="w-24 h-24 rounded-full absolute"
                    src={userImg}
                    alt="User"
                  />
                  <div className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                    <img
                      className="hidden group-hover:block w-12"
                      src="https://www.svgrepo.com/show/33565/upload.svg"
                      alt="Upload Icon"
                    />
                  </div>
                </div>
              </div>
            </label>

            {/* Img upload filed => default it stay hidden */}
            <input
              id="user-img"
              type="file"
              className="w-0 hidden"
              onChange={handleUploadedImgPreview}
              accept="image/*"
            />
          </div>

          {/* Img upload instruction */}
          <div className="mt-2.5 space-y-[.1rem]">
            {/* title */}
            <h2 className="text-base font-semibold text-dark-blue">
              Select Your Picture
            </h2>

            {/* Instruction */}
            <p className="text-sm ">Accepted Image Files: JPEG, JPG, PNG</p>
            <p className="text-sm ">Accepted Size: (2MB)</p>
          </div>
        </div>

        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* Balance */}
          <h1 className="text-[1.625rem] font-semibold text-dark-blue">
            Balance: 0.00
          </h1>

          {/* Student ID */}
          <h1 className="text-[1.625rem] font-semibold text-dark-blue">
            Student ID: 0
          </h1>
        </div>

        <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* First Name */}
          <TextFiled title="First Name" />

          {/* Last Name */}
          <TextFiled title="Last Name" />
        </div>

        {/* Email */}
        <TextFiled title="Email" type="email" />

        {/* Phone Number */}
        <TextFiled
          title="Phone Number"
          placeholder="+88017000000000"
          type="email"
        />

        {/* Bio */}
        <Textarea title="Bio" placeholder="Type about yourself" rows="4" />

        {/* Address */}
        <TextFiled title="Address" placeholder="Type address" type="address" />

        {/* Select gender */}
        <div className="mb-4">
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold mb-2.5 capitalize"
          >
            Gender
          </label>

          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio text-purple-dark"
              />
              <span className="ml-2.5 text-gray-800">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio text-purple-dark"
              />
              <span className="ml-2.5 text-gray-800">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                className="form-radio text-purple-dark"
              />
              <span className="ml-2.5 text-gray-800">Other</span>
            </label>
          </div>
        </div>

        <div className="pt-5 space-y-6">
          {/* Save profile btn {type=submit} */}
          <PrimaryButton title="Save profile now" type="submit" />

          {/* Title */}
          <h1 className="text-2xl font-semibold text-dark-blue">
            Your Referral Code
          </h1>

          {/* Referral code */}
          <h1 className="text-4xl font-bold text-dark-blue">2458220</h1>

          <div>
            {/* Copy link */}
            <PrimaryButton title="Copy link" type="button" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
