import type {Route} from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | SafeRent" },
    { name: "description", content: "SafeRent Login Page" },
  ];
}

export default function Login() {
  return <div>Login</div>
}
