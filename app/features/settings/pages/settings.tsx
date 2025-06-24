import type {Route} from "./+types/settings";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settings | SafeRent" },
    { name: "description", content: "SafeRent Settings Page" },
  ];
}

export default function Settings() {
  return <div>Settings</div>
}
