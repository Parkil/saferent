import {Button} from "~/common/components/ui/button";
import type {Route} from "./+types/login-page";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/common/components/ui/card";
import {Label} from "~/common/components/ui/label";
import {Input} from "~/common/components/ui/input";

export const meta: Route.MetaFunction = () => {
  return [{ title: "로그인 | SafeRent" }];
};

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className={"flex flex-col gap-6"}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">로그인</CardTitle>
              <CardDescription>
                아이디와 패스워드를 입력해 로그인해주세요
              </CardDescription>
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
                        <a
                          href="#"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                          비밀번호를 분실하셨나요?
                        </a>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      로그인
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    계정이 없으신가요?{" "}
                    <a href="#" className="underline underline-offset-4">
                      회원가입
                    </a>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}