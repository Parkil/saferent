import {Button} from "~/common/components/ui/button";
import type {Route} from "./+types/join-page";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/common/components/ui/card";
import {Label} from "~/common/components/ui/label";
import {Input} from "~/common/components/ui/input";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Join | wemake" }];
};

export default function JoinPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className={"flex flex-col gap-6"}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">회원가입</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="email">이메일</Label>
                      <Input
                        id={"email"}
                        type={"email"}
                        placeholder={"saferent@example.com"}
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">패스워드</Label>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      회원가입
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            계속하시려면 <a href="#">이용 약관과</a>{" "}
            <a href="#">개인 정보 처리 방침</a> 에 동의해야 합니다.
          </div>
        </div>
      </div>
    </div>
  )
}