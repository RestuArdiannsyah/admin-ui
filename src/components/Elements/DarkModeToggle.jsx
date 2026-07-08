import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      onClick={toggleDarkMode}
      className={`w-6 h-6 cursor-pointer mb-2 flex items-center justify-center transition-colors ${
        darkMode ? "text-yellow-600" : "text-white"
      }`}
    >
      {darkMode ? (
        <LightModeIcon sx={{ fontSize: 16 }} />
      ) : (
        <DarkModeIcon sx={{ fontSize: 16 }} />

      )}
    </div>
  );
};

export default DarkModeToggle;