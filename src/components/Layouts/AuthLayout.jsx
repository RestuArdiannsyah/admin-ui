import React from "react";
import { useContext } from "react";
import Logo from "../Elements/Logo";
import { ThemeContext } from "../../context/themeContext";

const AuthLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main className={`min-h-screen bg-special-mainBg flex justify-center items-center ${theme.name}`}>
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
