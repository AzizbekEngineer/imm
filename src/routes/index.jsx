import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import Company from "../pages/company/Company";
import Contact from "../pages/contact/Contact";
import News from "../pages/news/News";
import Production from "../pages/production/Production";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/production",
        element: <Production />,
      },
    ],
  },
]);
