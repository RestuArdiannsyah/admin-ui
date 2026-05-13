import React from "react";
import { useRouteError } from "react-router-dom";
import Logo from "../components/Element/Logo";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg flex-col">
      <Logo />
      <h1 className="text-2xl font-bold mt-3 mb-1">Sorry,</h1>
      <p>
        {error.status} | {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorPage;
