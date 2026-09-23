import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/index.scss";
import Lazy from "./components/leazy/Lazy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Lazy fullscreen={false} />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
