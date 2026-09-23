import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import Home from "../pages/home/Home";
import Company from "../pages/company/Company";
import Contact from "../pages/contact/Contact";
import News from "../pages/news/News";
import Production from "../pages/production/Production";
import Works from "../pages/works/Works";
import VacancyDetail from "../pages/vakancy-detail/VakancyDetail";
import NewsDetail from "../pages/newsDetail/NewsDetail";
import Quality from "../components/quality/Quality";

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
      {
        path: "/vacancies",
        element: <Works />,
      },
      {
        path: "/quality",
        element: <Quality />,
      },
      {
        path: "/vacancies/:id",
        element: <VacancyDetail />,
      },
      {
        path: "/news/:id",
        element: <NewsDetail />,
      },
    ],
  },
]);
