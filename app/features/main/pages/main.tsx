import type {Route} from "./+types/main";
import {MainSearchForm} from "~/features/main/components/main-search-form";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Main | SafeRent" },
    { name: "description", content: "SafeRent Main Page" },
  ];
}
// min-h-svh : 이게 Card 영역을 vertical center 에 맞춰 준다
export default function Main() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <MainSearchForm className={"items-center"}/>
      </div>
    </div>
  )
}
