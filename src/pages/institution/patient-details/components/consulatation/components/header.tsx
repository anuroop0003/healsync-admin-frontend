import { Button } from "@/components/ui/button";
import {
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Header = () => (
  <CardHeader className="px-0">
    <CardTitle>Active Consultation</CardTitle>
    <CardDescription>
      Diagnostic tools and AI clinical insight generation.
    </CardDescription>
    <CardAction>
      <Button>
        <Sparkles />
        Get AI Summary
      </Button>
    </CardAction>
  </CardHeader>
);

export default Header;
