import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card"
import {Input} from "~/common/components/ui/input"
import {Label} from "~/common/components/ui/label"
import {cn} from "~/lib/utils"
import {Button} from "~/common/components/ui/button";
import React from "react";
import {Building2Icon, BuildingIcon, HouseIcon, LandmarkIcon} from "lucide-react";


export function MainSearchForm({
                            className,
                            ...props
                          }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent className={"space-y-10"}>
          <Label htmlFor={"address"} className={"flex flex-col items-start"}>
            주소로 찾기
            <small className={"text-muted-foreground"}>원하시는 주소의 정보를 찾아보세요</small>
            <Input placeholder={"주소를 입력해 주세요"} name={"address"} id={"address"}/>
            <Button className="w-full" type="submit">
              검색
            </Button>
          </Label>
          <Label htmlFor={"address"} className={"flex flex-col items-start"}>
            유형별 바로 가기
            <small className={"text-muted-foreground"}>원하시는 부동산 형태의 정보를 바로 보여드립니다</small>
            <div className={"flex flex-row gap-5"}>
              <Button variant="outline" className={"cursor-pointer"}>
                <Building2Icon className={"size-4"}/>
                아파트
              </Button>
              <Button variant="outline" className={"cursor-pointer"}>
                <BuildingIcon className={"size-4"}/>
                원룸 / 투룸
              </Button>
              <Button variant="outline" className={"cursor-pointer"}>
                <HouseIcon className={"size-4"}/>
                오피스텔
              </Button>
              <Button variant="outline" className={"cursor-pointer"}>
                <LandmarkIcon className={"size-4"}/>
                전세
              </Button>
              <Button variant="outline" className={"cursor-pointer"}>
                <HouseIcon className={"size-4"}/>
                빌라 / 주택
              </Button>
            </div>
          </Label>
        </CardContent>
      </Card>
    </div>
  )
}
