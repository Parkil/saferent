import type {Route} from "./+types/main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main | SafeRent" },
    { name: "description", content: "SafeRent Main Page" },
  ];
}

export default function Main() {
  return <div>Main</div>
}
