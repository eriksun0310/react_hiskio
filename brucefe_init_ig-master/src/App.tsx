import { useRoutes } from "react-router-dom";
import routes from "./routes";

//useRoutes 整合寫好的routes config,切換頁面就會切過去
//4. 使用useRoutes初始化路由
const App: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default App;
