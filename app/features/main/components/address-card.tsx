import {Link} from "react-router";
import {Card, CardHeader, CardTitle} from "~/common/components/ui/card";
import {LandPlotIcon, RouteIcon} from "lucide-react";

interface AddressCardProps {
  id: string;
  roadAddress: string;
  jibunAddress: string;
  zipCode: string;
}

export default function AddressCard({id, roadAddress, jibunAddress, zipCode}: AddressCardProps) {
  return (
    <Link to={`/products/${id}`} className={"block"}>
      <Card className={"w-full flex flex-row items-center justify-between p-4 bg-transparent hover:bg-primary/10"}>
        <CardHeader className={"w-full"}>
          <CardTitle className={"text-md font-semibold leading-none tracking-tight"}>{zipCode}</CardTitle>
          <div className="flex flex-col items-start gap-2 mt-2">
            <div className={"flex items-center gap-px text-xs text-muted-foreground"}>
              <RouteIcon className={"size-4"} />
              <span>도로명 주소</span>
            </div>
            <div className={"text-sm"}>
              {roadAddress}
            </div>
            <div className={"flex items-center gap-px text-xs text-muted-foreground"}>
              <LandPlotIcon className={"size-4"} />
              <span>지번 주소</span>
            </div>
            <div className={"text-sm"}>
              {jibunAddress}
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}