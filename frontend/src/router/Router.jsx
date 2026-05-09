import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        }
    ]
  },


]);

export default Router;