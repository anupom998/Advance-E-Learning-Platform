
import React, { useState } from 'react';
// image
import Logo from "../../assets/site-logo.png";
// import Person from "../../assets/person-img.png";
import OfficeImg from "../../assets/office.png"

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  // Increment logic
  const handleIncrement = () => {
    // Convert the current phone number to a number, increment it, and update the state
    setPhoneNumber((prev) => {
      // Parse the phone number as an integer, defaulting to 0 if empty
      const currentValue = parseInt(prev) || 0;
      // Increment the value
      return currentValue + 1;
    });
  };

  // Decrement logic
  const handleDecrement = () => {
    // Convert the current phone number to a number, decrement it, and update the state
    setPhoneNumber((prev) => {
      const currentValue = parseInt(prev) || 0;
      // Decrement the value but ensure it doesn't go below 0
      return currentValue - 1;
    });
  }

  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        {/*left content  */}
        <div className=' h-full w-full bg-signIn px-20 flex flex-col gap-10 md:gap-20 py-10'>
          {/* logo */}
          <div className='flex-1'>
            <a href='#' className=''>
              <img src={Logo} alt='' className='max-h-32' />
            </a>
          </div>
          {/* text */}
          <div className='flex-1 '>
            <p className='sm:text-2xl text-xl text-gray-100 tracking-wider'>Discover world best online <br /> courses here. 24k online course <br /> is  waiting for you</p>
          </div>
          <div className='flex-1 ' >
            {/* Office image  */}
            <img src={OfficeImg} className='max-h-72 md:max-h-[26rem]' alt='' />
          </div>
        </div>

        {/* right content */}
        <div className='flex-1 h-full py-16'>
          <div className="flex min-h-full flex-1 flex-col px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-start text-2xl font-semibold leading-9 tracking-tight text-[rgb(4,4,83)]">
                Create an Account
              </h2>
              <p className="text-start text-sm text-gray-500">
                Already have an account?
                <a href="#" className="font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500">
                  Sign In
                </a>
              </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form action="#" method="POST" className="space-y-6">
                {/* Email */}
                <div>
                  <label htmlFor="emailOrPhone" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                    Email
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="mt-3">
                    <input
                      id="emailOrPhone"
                      name="emailOrPhone"
                      type="email"
                      placeholder="Type your email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Code and WhatsApp */}
                <div>
                  <div className="flex gap-3 mt-3">
                    <div className="relative w-[30%]">
                      <label htmlFor="code" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                        Code
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <select
                        id="code"
                        name="code"
                        required
                        className="appearance-none w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                        style={{
                          backgroundImage: 'none', // Hide the dropdown arrow
                          WebkitAppearance: 'none',
                          MozAppearance: 'none',
                        }}
                      >
                        <option value="88">BD (+88)</option>
                        <option value="91">IN (+91)</option>
                      </select>
                    </div>

                    <div className="w-3/4 relative">
                      {/* Phone Number Label */}
                      <label htmlFor="phone" className="block text-sm font-medium leading-6 text-[rgb(4,4,83)]">
                        WhatsApp Number
                        <span className="text-red-500 ml-1">*</span>
                      </label>

                      {/* Phone number input with increment/decrement symbols */}
                      <div className="relative">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Type your mobile number"
                          required
                          autoComplete="off"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="mt-1 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6 pr-10" // Added padding to make space for the symbols
                        />

                        {/* Increment and Decrement symbols */}
                        <div className="absolute inset-y-0 right-0 flex flex-col justify-center items-center h-full mr-2">
                          <button
                            type="button"
                            className="text-gray-500 focus:outline-none"
                            onClick={() => {
                              handleIncrement();
                            }}
                          >
                            &and; {/* Up arrow symbol */}
                          </button>
                          <button
                            type="button"
                            className="text-gray-500 focus:outline-none"
                            onClick={() => {
                              handleDecrement();
                            }}
                          >
                            &or; {/* Down arrow symbol */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name */}
                <div className="flex gap-4">
                  {/* First Name Field */}
                  <div className="w-1/2">
                    <label htmlFor="firstName" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                      First Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="mt-3">
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* Last Name Field */}
                  <div className="w-1/2">
                    <label htmlFor="lastName" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                      Last Name
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="mt-3">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                    Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="mt-3 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      required
                      autoComplete="new-password"
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    />
                    <i
                      className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer`}
                      onClick={togglePasswordVisibility}
                    ></i>
                  </div>
                </div>
                {/* Referral Code */}
                <div>
                  <label htmlFor="referralCode" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                    Referral Code
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="mt-3">
                    <input
                      id="referralCode"
                      name="referralCode"
                      type="text"
                      placeholder="Referral code"
                      required
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Terms and Conditions */}
                <div className="mt-4 flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-600 text-indigo-600 focus:ring-0 focus:outline-none"
                    />
                  </div>
                  <div className="ml-2 text-sm">
                    <label htmlFor="terms" className="text-gray-600">
                      By clicking Create account, I agree that I have read and accepted the{' '}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Terms of Use
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Privacy Policy
                      </a>.
                    </label>
                  </div>
                </div>

                {/* submit button */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm border-2 border-indigo-600 hover:bg-white hover:text-indigo-600 transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;






