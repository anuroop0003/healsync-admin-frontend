import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CircleSmall } from "lucide-react";

const Header = () => (
  <div className="flex gap-6 items-center justify-between">
    <div className="flex-1">
      <h2 className="text-xl font-semibold">Today's Tokens</h2>
      <p className="text-sm text-muted-foreground">
        October 24, 2024 • Tuesday
      </p>
    </div>

    <Badge className="uppercase flex items-center border-emerald-300 bg-emerald-50 text-emerald-700 py-2 px-3 leading-tight">
      <CircleSmall className="fill-emerald-700" />
      on service
    </Badge>

    <Button variant="outline" size="icon">
      <Bell />
    </Button>
  </div>
);

export default Header;
