import {Link} from "react-router"
import {Button} from "~/common/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog"
import {Input} from "~/common/components/ui/input"
import {Label} from "~/common/components/ui/label"
import {useState} from "react";

export const loader = () => {
  return {
    hello: "world",
  }
}

//export default 가 loader 인듯
export default function DialogDemo() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")

  return (
    <div className={"py-20"}>
      <Input name={"search"} id={"search"} placeholder={"Search"} onChange={(e) => setInput(e.target.value)} value={input}/>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>

      <Dialog modal={true} open={open} onOpenChange={setOpen}>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </DialogDescription>
            </DialogHeader>
            <small>외부에서 입력한 값 : {input}</small>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input id="username-1" name="username" defaultValue="@peduarte"/>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" asChild>
                <Link to={'/'}>Submit</Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}
