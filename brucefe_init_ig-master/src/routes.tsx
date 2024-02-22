import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import Following from "./pages/following";
import NotFound from "./pages/notFound";

// 2. 寫router config
const routes: RouteObject[] = [
  {
    path: "/", // 根目錄
    element: <Home />,
    children: [],
  },
  {
    path: "/following",
    element: <Following />,
    children: [],
  },
  {
    path: "*", // 打錯網址
    element: <NotFound />,
    children: [],
  },
];

export default routes;
