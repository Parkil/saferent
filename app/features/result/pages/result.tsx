import type {Route} from "./+types/result";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Result | SafeRent" },
    { name: "description", content: "SafeRent Result Page" },
  ];
}

export default function Result() {
  return <div>Result</div>
}
