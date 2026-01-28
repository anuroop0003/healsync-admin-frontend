import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, BriefcaseMedical } from "lucide-react";

const ConsultationHeader = () => {
  return (
    <div className="h-16 flex items-center justify-between border-b px-6 gap-6">
      <div className="w-40 flex items-center gap-2 font-semibold tracking-wide">
        <div className="h-8 w-8 bg-black text-white rounded-md flex items-center justify-center text-xs shadow-sm">
          H
        </div>
        <span className="text-sm">HEALSYNC</span>
      </div>

      <div className="h-8 w-px bg-border" />

      <div className="flex-1 flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarFallback className="text-xs">SJ</AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <p className="text-sm font-bold">Sarah Jenkins</p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
            ID: PAT-9421-B
          </p>
        </div>
      </div>

      <Button variant="ghost" size="icon" className="hover:bg-muted">
        <Bell />
      </Button>

      <div className="h-8 w-px bg-border" />

      <div className="text-right leading-tight">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
          Primary Physician
        </p>
        <p className="text-sm font-bold">Dr. Alexander Vance</p>
      </div>

      <Button size="icon" variant="outline" className="hover:bg-muted">
        <BriefcaseMedical />
      </Button>
    </div>
  );
};

export default ConsultationHeader;
