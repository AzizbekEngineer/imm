import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import Lazy from "../components/leazy/Lazy";

const Home = lazy(() => import("../pages/home/Home"));
const Company = lazy(() => import("../pages/company/Company"));
const Contact = lazy(() => import("../pages/contact/Contact"));
const News = lazy(() => import("../pages/news/News"));
const Production = lazy(() => import("../pages/production/Production"));
const Works = lazy(() => import("../pages/works/Works"));
const VacancyDetail = lazy(
  () => import("../pages/vakancy-detail/VakancyDetail"),
);
const NewsDetail = lazy(() => import("../pages/newsDetail/NewsDetail"));
const Quality = lazy(() => import("../components/quality/Quality"));
const ProductDetail = lazy(
  () => import("../components/productDetail/ProductDetail"),
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Lazy />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsDetail />,
      },
      {
        path: "production",
        element: <Production />,
      },
      {
        path: "products/:slug",
        element: <ProductDetail />,
      },
      {
        path: "vacancies",
        element: <Works />,
      },
      {
        path: "vacancies/:id",
        element: <VacancyDetail />,
      },
      {
        path: "quality",
        element: <Quality />,
      },
    ],
  },
]);
