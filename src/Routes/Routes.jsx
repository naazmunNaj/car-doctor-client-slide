import {
    createBrowserRouter 
} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from './../Pages/Register/Register';


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>
        }
      ]
    },
  ]);
export default router