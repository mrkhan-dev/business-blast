import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./FirebaseProvider/AuthProvider";
import {HelmetProvider} from "react-helmet-async";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
