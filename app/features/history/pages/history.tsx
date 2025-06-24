import type {Route} from "./+types/history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search History | SafeRent" },
    { name: "description", content: "SafeRent Search History Page" },
  ];
}

export default function History() {
  return <div>Search History</div>
}
