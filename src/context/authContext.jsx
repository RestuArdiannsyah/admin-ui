import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { registerService } from "../services/authService";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        return jwtDecode(token);
      } catch (err) {
        console.error("Invalid token", err);
        localStorage.removeItem("token");
        return null;
      }
    }

    return null;
  });

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);

      setUser(decoded);
      localStorage.setItem("token", token);
    } catch (err) {
      console.error("Invalid token");
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };
  
  const register = (refreshToken) => {
    login(refreshToken);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
