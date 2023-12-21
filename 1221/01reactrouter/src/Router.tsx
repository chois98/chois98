import React from "react";
import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
// import About from "./component/About";
import Root from "./Root";
import About from "./component/About";
import NotFound from "./component/NotFound";
import ErroeComponent from "./component/ErrorComponent";
import User from "./component/User";
import Follower from "./component/Follower";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErroeComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "followers", element: <Follower /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
