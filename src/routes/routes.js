import App from "./../App";
import Home from "./../pages/Home/index";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginForm";

function Protect({ children }) {
  const redirect = true;

  if (redirect) {
    redirect("/login");
  }

  return children;
}

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
