import { createBrowserRouter } from "react-router-dom";


// Pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/projects",
    element: <Home/>
  },
  {
    path: "/about-us",
    element: <Home/>
  },
  {
    path: "/community",
    element: <Home/>
  },
  {
    path: "*",
    element: <PageNotFound/>
  }
])