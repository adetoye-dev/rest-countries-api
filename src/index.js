import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
