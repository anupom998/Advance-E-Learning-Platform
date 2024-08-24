import React from 'react'
import { useState } from 'react';
// image
import Logo from "../../assets/logo.png"
import Person from "../../assets/person-img.png"

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section>
        <div className='container  grid grid-cols-1 md:grid-cols-2 w-screen'>
            
                {/*left content  */}
                <div className=' h-full w-full bg-signIn px-20 flex flex-col'>
                    {/* logo */}
                    <div className='flex-1 flex items-center justify-center'>
                        <a href='#' className='justify-start'>
                            <img src={Logo} />
                        </a> 
                    </div> 
                      {/* text */}
                    <div className='flex-1 flex items-center justify-center'>
                        <p className='text-xl text-white'>Discover world best online courses here. 24k online course is waiting for you</p>
                    </div>      
                    <div className='flex-1 flex items-center justify-center' >
                    {/* person's image  */}
                        <img src={Person} /> 
                    </div>    
                </div>
                
                      
                {/* right content */}
            <div className='flex-1 h-full bg-green-600'>
                  
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                
                        <h2 className="mt-10 text-start text-2xl font-semibold leading-9 tracking-tight text-[rgb(4,4,83)]">
                            Sign In
                        </h2>
                        <p className="text-start text-sm text-gray-500">
                            New User ? {''}   
                            <a href="#" className="font-semibold underline leading-6 text-indigo-600 hover:text-indigo-500">
                                Create an Account
                            </a>
                        </p>  
                    </div>
                    
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                    
                            <label htmlFor="email" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                                Email or Whatsapp
                            </label>
                            <div className="mt-3">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Type your email or whatsapp"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                    

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-md font-medium leading-6 text-[rgb(4,4,83)]">
                                        Password
                                    </label>
                                
                                </div>
                                <div className="mt-3 relative">
                                    <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="*********"
                                    required
                                    autoComplete="off"
                                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
                                    />
                                    <i
                                        className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer`}
                                        onClick={togglePasswordVisibility}
                                    ></i>
                                </div>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-semibold underline text-indigo-600 hover:text-gray-500">
                                    Forgot password?
                                </a>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm border-2 border-indigo-600 hover:bg-white hover:text-indigo-600 transition duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    </section>
  )
}

export default SignIn






