import { RouteConfig } from "react-router-config";
import IntelligentTriage from "../components/IntelligentTriage";
import Result from "../components/Result";

const routerConfigs: RouteConfig[] = [
  {
    component: Result,
    path: "/go"
  },
  {
    component: IntelligentTriage,
    exact: true,
    path: "/"
  }
];
export default routerConfigs;
