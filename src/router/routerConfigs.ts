import { RouteConfig } from "react-router-config";
import IntelligentTriage from "../components/IntelligentTriage";
import Result from "../components/Result";
import RelateDisease from "../components/RelateDisease";


const routerConfigs: RouteConfig[] = [
  {
    // @ts-ignore
    component: Result,
    path: "/go"
  },
  {
    // @ts-ignore
    component: RelateDisease,
    path: "/next"
  },
  {
    component: IntelligentTriage,
    exact: true,
    path: "/"
  }
];
export default routerConfigs;
