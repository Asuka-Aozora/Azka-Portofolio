import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import Home from "./screens/home/HomeScreen";
import Error from "./screens/error/ErrorScreen";
import "./assets/sass/style.scss";

const router = Router([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
