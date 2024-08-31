// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = (email, password) => {
//     const dummyEmail = "hasan@student.com";
//     const dummyPassword = "student";

//     if (email === dummyEmail && password === dummyPassword) {
//       setIsLoggedIn(true);
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


// import { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState(null); // Add state for user role

//   const login = (email, password) => {
//     const studentEmail = "hasan@student.com";
//     const studentPassword = "student";

//     const adminEmail = "admin@admin.com";
//     const adminPassword = "admin123";

//     const subAdminEmail = "subadmin@admin.com";
//     const subAdminPassword = "subadmin123";

//     if (email === studentEmail && password === studentPassword) {
//       setIsLoggedIn(true);
//       setUserRole("student");
//       return true;
//     } else if (email === adminEmail && password === adminPassword) {
//       setIsLoggedIn(true);
//       setUserRole("admin");
//       return true;
//     } else if (email === subAdminEmail && password === subAdminPassword) {
//       setIsLoggedIn(true);
//       setUserRole("sub-admin");
//       return true;
//     } else {
//       alert("Invalid email or password");
//       return false;
//     }
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setUserRole(null); // Reset user role on logout
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // State for user role

  const login = (email, password) => {
    const studentEmail = "hasan@student.com";
    const studentPassword = "student";

    const adminEmail = "admin@admin.com";
    const adminPassword = "admin123";

    const subAdminEmail = "subadmin@admin.com";
    const subAdminPassword = "subadmin123";

    if (email === studentEmail && password === studentPassword) {
      setIsLoggedIn(true);
      setUserRole("student");
      return true;
    } else if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true);
      setUserRole("admin");
      return true;
    } else if (email === subAdminEmail && password === subAdminPassword) {
      setIsLoggedIn(true);
      setUserRole("sub-admin");
      return true;
    } else {
      alert("Invalid email or password");
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null); // Reset user role on logout
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


