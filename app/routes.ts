import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("difficulty", "routes/difficulty.tsx"),
    route("wordInput", "routes/wordInput.tsx")
] satisfies RouteConfig;
