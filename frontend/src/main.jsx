import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./router/routes";
import AppLayout from './layout/AppLayout'
import './index.css'
import './App.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AppLayout>
    <BrowserRouter>
      <div class="w-full h-full">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </AppLayout>
);
