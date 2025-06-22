
import type {Route} from "./+types/main";
import {Button} from "~/common/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main | SafeRent" },
    { name: "description", content: "SafeRent Main Page" },
  ];
}

export default function Main() {
  return <div>Main <Button variant={"outline"}>Test Button</Button></div>
}
