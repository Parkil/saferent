import type {Route} from "./+types/address_search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Address Search | SafeRent" },
    { name: "description", content: "SafeRent Login Page" },
  ];
}

export default function Address_search() {
  return <div>Address Search</div>
}
