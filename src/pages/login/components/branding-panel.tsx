import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarCheck, ShieldUser } from "lucide-react";

const Feature = ({ icon, title, desc }: any) => (
  <div className="flex gap-3">
    <span className="border rounded-md p-3 bg-white">{icon}</span>
    <div>
      <p className="font-bold">{title}</p>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const BrandingPanel = () => (
  <Card className="justify-center w-xl bg-secondary space-y-3">
    <CardHeader className="space-y-3 px-12">
      <CardTitle className="font-bold text-3xl">
        Enterprise Health Management
      </CardTitle>
      <CardDescription className="text-base">
        A streamlined monochrome environment designed for precision scheduling
        and high-throughput clinic management.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-6 px-12">
      <Feature
        icon={<CalendarCheck />}
        title="Smart Scheduling"
        desc="Automated availability tracking"
      />
      <Feature
        icon={<ShieldUser />}
        title="Role-based Access"
        desc="Secure permissions for institutions and doctors"
      />
    </CardContent>

    <CardFooter className="flex flex-col items-start space-y-3 px-12">
      <div className="h-px bg-border w-full mb-9" />
      <p className="text-xs text-gray-400 uppercase font-medium tracking-widest">
        Integrates with
      </p>
      <div className="flex gap-6 text-sm text-gray-500 font-semibold tracking-wide">
        <span>MEDCORE</span>
        <span>SYSTEM-X</span>
        <span>PHARMA-LYNK</span>
      </div>
    </CardFooter>
  </Card>
);

export default BrandingPanel;
