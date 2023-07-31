import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
// import Detail from './pages/Detail';
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import UploadArt from "./pages/UploadArt";
import Upload from "./pages/Upload";
import WorkofArt from "./pages/WorkofArt";
import Artists from "./pages/Artists";
// import Success from "./pages/Success";
// import OrderHistory from "./pages/OrderHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Login />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/uploadart",
        element: <UploadArt />,
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "/workofart",
        element: <WorkofArt />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      // {
      //   path: "/orderHistory",
      //   element: <OrderHistory />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
