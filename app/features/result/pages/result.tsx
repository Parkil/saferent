import type {Route} from "./+types/result";
import {DotIcon, EyeIcon, HeartIcon} from "lucide-react";
import {Button} from "~/common/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Result | SafeRent" },
    { name: "description", content: "SafeRent Result Page" },
  ];
}

export default function Result() {
  return (
    <div className={"pt-20"}>
      <div className={"flex flex-col py-20 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/10"}>
        <h1 className={"text-5xl font-bold text-foreground"}>안전 전세</h1>
        <p className={"text-xl font-light text-foreground"}>
          이제부터 전세 사기 위험 없이 안전한 전세를 누리세요
        </p>
      </div>

      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">
          "A startup that creates an AI-powered generated personal trainer,
          delivering customized fitness recommendations and tracking of progress
          using a mobile app to track workouts and progress as well as a website
          to manage the business."
        </p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" />
            <span>123</span>
          </div>
          <DotIcon className="w-4 h-4" />
          <span>12 hours ago</span>
          <DotIcon className="w-4 h-4" />
          <Button variant="outline">
            <HeartIcon className="w-4 h-4" />
            <span>12</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  )
}
