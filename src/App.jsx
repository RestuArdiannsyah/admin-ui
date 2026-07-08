import "./App.css";
import { Link } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/error";
import Dashboard from "./pages/Dashboard";
import Balance from "./pages/Balance";
import Expenses from "./pages/Expenses";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return !user ? children : <Navigate to="/" />;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Dashboard />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignIn />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUp />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <Balance />
        </RequireAuth>
      ),
    },
    {
      path: "/expense",
      element: (
        <RequireAuth>
          <Expenses />
        </RequireAuth>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
