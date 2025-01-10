import "./index.css";
import App from "./App.jsx";
import theme from "./theme.js";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ToastContainer />
    <App />
  </ThemeProvider>
);
