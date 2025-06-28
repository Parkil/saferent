import type {Route} from "./+types/settings-page";
import {Label} from "~/common/components/ui/label";
import {Input} from "~/common/components/ui/input";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "설정 | SafeRent" },
    { name: "description", content: "SafeRent Settings Page" },
  ];
}

export default function SettingsPage() {
  return (
    <div className={"container mx-auto py-20"}>
      <div className={"grid grid-cols-2 gap-10 max-w-screen-lg mx-auto"}>
        <div className={"space-y-5"}>
          <Label className={"flex flex-col items-start"}>
            아이디
            <small className={"text-muted-foreground"}>아이디</small>
            <Input/>
          </Label>
          <Label className={"flex flex-col items-start"}>
            패스워드
            <small className={"text-muted-foreground"}>패스워드</small>
            <Input/>
          </Label>
        </div>
        <div>
          Grid2 - 검색 이력
        </div>
      </div>
    </div>
  )
}
