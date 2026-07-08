import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FromSignUp from "../components/Fragments/FromSignUp";
import { registerService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { useContext, useState } from "react";

const SignUp = () => {
  const { register } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      const data = await registerService(name, email, password);
      setSnackbar({ open: true, message: "Register Berhasil", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: err.msg, severity: "error" });
    }
  };

  return (
    <AuthLayout>
      <FromSignUp onSubmit={handleRegister} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
};

export default SignUp;
