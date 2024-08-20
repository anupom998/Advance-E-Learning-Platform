import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in

  const login = () => setIsLoggedIn(true);   // Function to log in
  const logout = () => setIsLoggedIn(false); // Function to log out

  return { isLoggedIn, login, logout }; // Return the state and functions
};