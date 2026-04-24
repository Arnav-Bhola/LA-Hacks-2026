import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/Root";
import ErrorPage from "./pages/404";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

export default router;