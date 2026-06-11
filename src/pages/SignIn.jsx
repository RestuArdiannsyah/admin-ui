import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const SignIn = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);

      login(refreshToken);
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
};

export default SignIn;
