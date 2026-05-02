import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import MainLayout from "./Layout/MainLayout";
import NotFound from "../NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/hero" replace /> },
      { path: "hero", element: <HeroSection /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Project /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
