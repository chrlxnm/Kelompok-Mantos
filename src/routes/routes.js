import App from "./../App";
import Home from "./../pages/Home/index";
import LoginPage from "../pages/LoginPage/LoginForm";
import { Provider } from "react-redux";
import store from "../redux/store";
import Report from "./../pages/Report/index";
import { createBrowserRouter } from "react-router-dom";

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
        element: (
          <Provider store={store}>
            <Home />
          </Provider>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/transaction",
        element: <LoginPage />,
      },
    ],
  },
]);
