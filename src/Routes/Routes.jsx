import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
            path: '/login', 
            element: <Login></Login>
        }, 
        {
            path: '/signup', 
            element: <SignUp></SignUp>
        }, 
        {
          path: '/about', 
          element: <About></About>
        }
      ]
    },
  ]);