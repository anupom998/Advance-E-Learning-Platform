import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    const dummyEmail = "hasan@student.com";
    const dummyPassword = "student";

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
