// import { useState } from "react";
// import { redirect } from "react-router-dom";

// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(!true); // Default to not logged in

//   const login = () => setIsLoggedIn(true);
//   const logout = () => {
//     setIsLoggedIn(false)
//     redirect('/')
//   };

//   return { isLoggedIn, login, logout }; // Return the state and functions
// };

// export default useAuth;


// 2nd logic

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in

//   const navigate = useNavigate();

//   const dummyEmail = "u@ex.com";
//   const dummyPassword = "pass";

//   const login = (email, password) => {
//     console.log('Login called with:', email, password);
//     // console.log("isLoggedIn ", isLoggedIn)
//     if (email === dummyEmail && password === dummyPassword) {
//       setIsLoggedIn(true);
//       navigate("/student");
//     } else {
//       alert("Invalid email or password"); // Handle incorrect login
//     }
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//    navigate("/");
//   };

//    useEffect(() => {
//     console.log(`isLoggedIn: ${isLoggedIn}`);
//   }, [isLoggedIn]);

//   return { isLoggedIn, login, logout };
// };

// export default useAuth;

// 2nd

// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = (email, password) => {
//     const dummyEmail = "u@ex.com";
//     const dummyPassword = "pass";

//     if (email === dummyEmail && password === dummyPassword) {
//       setIsLoggedIn(true);
//       console.log("User is logged in:", isLoggedIn);
//       return true;
//     } else {
//       alert("Invalid email or password");
//       return false;
//     }
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// 3rd


// import React, { createContext, useContext, useState } from "react";

// // Create the AuthContext
// const AuthContext = createContext();

// // Create the AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Login function
//   const login = (email, password) => {
//     const dummyEmail = "u@ex.com";
//     const dummyPassword = "pass";

//     if (email === dummyEmail && password === dummyPassword) {
//       setIsLoggedIn(true);
//       return true;
//     } else {
//       alert("Invalid email or password");
//       return false;
//     }
//   };

//   // Logout function
//   const logout = () => {
//     setIsLoggedIn(false);
//   };

//   // Provide isLoggedIn, login, and logout to the context
//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => useContext(AuthContext);


// 4th

// hooks/useAuth.js
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    const dummyEmail = "u@ex.com";
    const dummyPassword = "pass";

    if (email === dummyEmail && password === dummyPassword) {
      setIsLoggedIn(true);
      return true;
    } else {
      alert("Invalid email or password");
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
