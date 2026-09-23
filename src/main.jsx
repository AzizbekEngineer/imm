import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
const App = lazy(() => import("./App.jsx"));
import "../src/styles/index.scss";
import Lazy from "./components/leazy/Lazy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Lazy fullscreen={false} />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
