import {type RouteConfig, index, route, prefix, layout} from "@react-router/dev/routes";

export default [
  index("features/main/pages/main.tsx"),

  ...prefix("/auth", [
    route("/login", "features/auth/pages/login-page.tsx"),
    route("/join", "features/auth/pages/join-page.tsx"),
  ]),

  ...prefix("/my", [
    route("/settings","features/my/pages/settings-page.tsx"),
    route("/history","features/my/pages/history-page.tsx"),
  ]),

  route("/result","features/result/pages/result-page.tsx"),
  route("/test","features/test/test-page.tsx"),
] satisfies RouteConfig;
