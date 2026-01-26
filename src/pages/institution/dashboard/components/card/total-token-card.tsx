import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket } from "lucide-react";

const TotalTokensCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="uppercase text-base text-muted-foreground tracking-wider">
        Total Tokens
      </CardTitle>
      <CardAction>
        <Ticket className="text-muted-foreground" />
      </CardAction>
    </CardHeader>
    <CardContent className="-mt-3 space-y-1">
      <p className="text-5xl font-bold">42</p>
      <p className="text-base text-muted-foreground">Patients Today</p>
    </CardContent>
  </Card>
);

export default TotalTokensCard;
