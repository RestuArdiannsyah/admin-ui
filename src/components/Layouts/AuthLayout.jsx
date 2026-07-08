import React from "react";
import { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";
import { DarkModeContext } from "../../context/darkModeContext";

const AuthLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <main
        className={`min-h-screen bg-special-mainBg dark:bg-dark dark:text-dark-title flex justify-center items-center ${
          theme.name
        } ${darkMode ? "dark" : ""}`}
      >
        {/* container start */}
        <div className="w-full max-w-sm">
          <Logo />
          {children}
        </div>
        {/* container end */}
      </main>
    </>
  );
};

export default AuthLayout;