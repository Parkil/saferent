import type {Route} from "../../../../.react-router/types/app/features/history";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search History | SafeRent" },
    { name: "description", content: "SafeRent Search History Page" },
  ];
}

export default function HistoryPage() {
  return <div>Search History</div>
}
