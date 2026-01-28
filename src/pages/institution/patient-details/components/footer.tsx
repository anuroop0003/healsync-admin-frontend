import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";

const ConsultationFooter = () => {
  return (
    <div className="h-16 flex items-center justify-between border-t px-6 gap-6">
      <div className="flex-1 flex items-center gap-6 text-sm">
        <span className="flex items-center gap-2 font-medium leading-snug text-muted-foreground">
          <Circle className="size-2.5 fill-primary text-primary" />
          Session Active:
          <span className="text-primary font-bold">18m 24s</span>
        </span>
        <span className="text-muted-foreground">|</span>
        <span className="text-muted-foreground font-medium">
          Consulting with{" "}
          <span className="font-bold text-primary">Sarah Jenkins</span>
        </span>
      </div>

      <Button variant="outline" className="cursor-pointer">
        Next Patient
        <ArrowRight />
      </Button>
      <Button className="cursor-pointer">Complete Consultation</Button>
    </div>
  );
};

export default ConsultationFooter;
