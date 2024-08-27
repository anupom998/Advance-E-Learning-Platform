import { useState } from "react";
import { redirect } from "react-router-dom";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!true); // Default to not logged in

  const login = () => setIsLoggedIn(true);  
  const logout = () => {
    setIsLoggedIn(false)
    redirect('/')
  };

  return { isLoggedIn, login, logout }; // Return the state and functions
};

export default useAuth;