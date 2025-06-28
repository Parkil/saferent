import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "~/common/components/ui/dialog";
import AddressCard from "./address-card";

interface AddressSearchDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  addressParam: string;
}

// 나중에 swipe 나 pagination 적용 필요
export default function AddressSearchDialog({open, setOpen, addressParam}: AddressSearchDialogProps) {
  // className="sm:max-w-[425px]"
  return (
    <Dialog modal={true} open={open} onOpenChange={setOpen}>
      <form>
        <DialogContent className={"max-w-xl"}>
          <DialogHeader>
            <DialogTitle>주소 검색</DialogTitle>
            <DialogDescription>
              '{addressParam}' 과 관련된 주소
            </DialogDescription>
          </DialogHeader>
          {Array.from({length: 4}).map((_, i) => (
            <AddressCard
              id="111"
              zipCode="22634"
              roadAddress="인천광역시 서구 완정로92번길 11 (마전동, 검단 힐스테이트)"
              jibunAddress="인천광역시 서구 마전동 997-3 검단 힐스테이트"
            />
          ))}
        </DialogContent>
      </form>
    </Dialog>
  )
}
