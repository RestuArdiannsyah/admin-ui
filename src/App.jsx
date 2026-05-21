import "./App.css";
import { Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
