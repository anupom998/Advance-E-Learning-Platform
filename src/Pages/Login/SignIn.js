// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Logo from "../../assets/site-logo.png";
// import OfficeImg from "../../assets/office.png";
// import { useAuth } from '../../hooks/useAuth';


// const SignIn = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const { login, isLoggedIn } = useAuth();
//   const [email, setEmail] = useState("hasan@student.com");
//   const [password, setPassword] = useState("student");
//   const navigate = useNavigate(); // Initialize useNavigate

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sign In button clicked");
//     console.log("Email:", email, "Password:", password);

//     const success = login(email, password);
//     console.log("Login success:", success);
//     console.log("isLoggedIn:", isLoggedIn);

//     if (success) {
//       console.log("Redirecting to /student");
//       navigate('/'); // Redirect to the /student route
//     } else {
//       console.log("Login failed");
//     }
//   };

//   return (
//     <section>
//       <div className='grid grid-cols-1 lg:grid-cols-2'>
//         {/* Left content */}
//         <div className='h-full w-full bg-signIn px-20 flex flex-col gap-10 md:gap-20 py-10'>
//           {/* Logo */}
//           <div className='flex-1'>
//             <a href='#'>
//               <img src={Logo} alt='' className='max-h-32' />
//             </a>
//           </div>
//           {/* Text */}
//           <div className='flex-1'>
//             <p className='sm:text-2xl text-xl text-gray-100 tracking-wider'>
//               Discover world best online <br /> courses here. 24k online course
//               <br /> is waiting for you
//             </p>
//           </div>
//           <div className='flex-1'>
//             {/* Office image */}
//             <img src={OfficeImg} className='max-h-72 md:max-h-96' alt='' />
//           </div>
//         </div>

//         {/* Right content */}
//         <div className='flex-1 h-full'>
//           <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
//             <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
//               <h2 className='mt-10 text-start text-2xl font-semibold leading-9 tracking-tight text-[rgb(4,4,83)]'>
//                 Sign In
//               </h2>
//               <p className='text-start text-sm text-gray-500'>
//                 New User?
//                 <a
//                   href='/sign-up'
//                   className='font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500'>
//                   Create an Account
//                 </a>
//               </p>
//             </div>
//             {/* Form */}
//             <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
//               <form onSubmit={handleSubmit} method='POST' className='space-y-6'>
//                 {/* Email or WhatsApp */}
//                 <label
//                   htmlFor='email'
//                   className='block text-md font-medium leading-6 text-[rgb(4,4,83)]'>
//                   Email or WhatsApp
//                 </label>
//                 <div className='mt-3'>
//                   <input
//                     id='email'
//                     name='email'
//                     type='email'
//                     placeholder='Type your email or WhatsApp'
//                     required
//                     autoComplete='email'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className='block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6'
//                   />
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <div className='flex items-center justify-between'>
//                     <label
//                       htmlFor='password'
//                       className='block text-md font-medium leading-6 text-[rgb(4,4,83)]'>
//                       Password
//                     </label>
//                   </div>
//                   <div className='mt-3 relative'>
//                     <input
//                       id='password'
//                       name='password'
//                       type={showPassword ? 'text' : 'password'}
//                       placeholder='*********'
//                       required
//                       autoComplete='off'
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className='block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6'
//                     />
//                     <i
//                       className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer`}
//                       onClick={togglePasswordVisibility}></i>
//                   </div>
//                 </div>
//                 {/* Forgot Password */}
//                 <div className='text-sm'>
//                   <a
//                     href='#'
//                     className='font-semibold underline text-indigo-600 hover:text-gray-500'>
//                     Forgot password?
//                   </a>
//                 </div>

//                 {/* Submit */}
//                 <div>
//                   <button
//                     type="submit"
//                     className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm border-2 border-indigo-600 hover:bg-white hover:text-indigo-600 transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                   >
//                     Sign In
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/site-logo.png";
import OfficeImg from "../../assets/office.png";
import { useAuth } from '../../hooks/useAuth';


const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggedIn, userRole } = useAuth();
  const [email, setEmail] = useState("hasan@student.com");
  const [password, setPassword] = useState("student");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const success = login(email, password);

  //   if (success) {
  //     if (userRole === "student") {
  //       navigate('/'); // Redirect to the student page
  //     }  else {
  //       alert("Invalid email or password for student login.");
  //       return;
  //   }
  //   }
  // };

  const handleSubmit = (e) => {
  e.preventDefault();
  const success = login(email, password);

  if (success) {
    const currentRole = userRole; // Capture the role immediately after login

    if (currentRole === "student" && window.location.pathname === "/login") {
      navigate('/'); // Redirect to the student page
    } 
  }
};


  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* Left content */}
        <div className='h-full w-full bg-signIn px-20 flex flex-col gap-10 md:gap-20 py-10'>
          {/* Logo */}
          <div className='flex-1'>
            <a href='#'>
              <img src={Logo} alt='' className='max-h-32' />
            </a>
          </div>
          {/* Text */}
          <div className='flex-1'>
            <p className='sm:text-2xl text-xl text-gray-100 tracking-wider'>
              Discover world best online <br /> courses here. 24k online course
              <br /> is waiting for you
            </p>
          </div>
          <div className='flex-1'>
            {/* Office image */}
            <img src={OfficeImg} className='max-h-72 md:max-h-96' alt='' />
          </div>
        </div>

        {/* Right content */}
        <div className='flex-1 h-full'>
          <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
              <h2 className='mt-10 text-start text-2xl font-semibold leading-9 tracking-tight text-[rgb(4,4,83)]'>
                Sign In
              </h2>
              <p className='text-start text-sm text-gray-500'>
                New User?
                <a
                  href='/sign-up'
                  className='font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500'>
                  Create an Account
                </a>
              </p>
            </div>
            {/* Form */}
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <form onSubmit={handleSubmit} method='POST' className='space-y-6'>
                {/* Email or WhatsApp */}
                <label
                  htmlFor='email'
                  className='block text-md font-medium leading-6 text-[rgb(4,4,83)]'>
                  Email or WhatsApp
                </label>
                <div className='mt-3'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Type your email or WhatsApp'
                    required
                    autoComplete='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6'
                  />
                </div>

                {/* Password */}
                <div>
                  <div className='flex items-center justify-between'>
                    <label
                      htmlFor='password'
                      className='block text-md font-medium leading-6 text-[rgb(4,4,83)]'>
                      Password
                    </label>
                  </div>
                  <div className='mt-3 relative'>
                    <input
                      id='password'
                      name='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='*********'
                      required
                      autoComplete='off'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6'
                    />
                    <i
                      className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer`}
                      onClick={togglePasswordVisibility}></i>
                  </div>
                </div>
                {/* Forgot Password */}
                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-semibold underline text-indigo-600 hover:text-gray-500'>
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm border-2 border-indigo-600 hover:bg-white hover:text-indigo-600 transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;







