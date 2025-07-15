import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./router/routes.js";
import AppLayout from './layout/AppLayout.js'
import './index.css'
import './App.css'

const root = document.getElementById("root") as HTMLElement;

try {
  ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppLayout>
      <div className="w-full h-full">
        <AppRoutes />
      </div>
    </AppLayout>
  </BrowserRouter>
);
} catch (error) {
  console.error("Error rendering React application:", error);
}