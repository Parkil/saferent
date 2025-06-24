import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("features/main/pages/main.tsx"),
  route("/login","features/login/pages/login.tsx"),
  route("/address_search","features/address_search/pages/address_search.tsx"),
  route("/result","features/result/pages/result.tsx"),
  route("/settings","features/settings/pages/settings.tsx"),
  route("/history","features/history/pages/history.tsx"),
] satisfies RouteConfig;
