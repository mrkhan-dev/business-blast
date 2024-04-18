import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import PrivetRouteUpdateProfile from "../components/PrivetRoute/PrivetRouteUpdateProfile";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/estateDetails/:id",
        element: (
          <PrivetRoute>
            <EstateDetails />
          </PrivetRoute>
        ),
        loader: () => fetch("../data.json"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "update_profile",
        element: (
          <PrivetRouteUpdateProfile>
            <UpdateProfile />
          </PrivetRouteUpdateProfile>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
