// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HabitDetailPage from "./pages/HabitDetailPage";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "habit/:id",
        element: <HabitDetailPage />
      }
    ]
  }
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
