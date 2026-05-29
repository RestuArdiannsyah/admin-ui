import React from "react";
import Logo from "../Elements/Logo";
import FormSignIn from "../Fragments/FormSignIn";

const AuthLayout = (props) => {
  const { children } = props;

  return (
    <>
      <main className="min-h-screen flex justify-center items-center bg-special-bg">
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
