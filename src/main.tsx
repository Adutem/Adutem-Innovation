import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setAuthorization } from "./api/apiCore.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

setAuthorization(sessionStorage.getItem("accessToken"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <ToastContainer autoClose={2000} limit={1} theme="dark" />
        <App />
      </BrowserRouter>
    </LocalizationProvider>
  </Provider>
);
