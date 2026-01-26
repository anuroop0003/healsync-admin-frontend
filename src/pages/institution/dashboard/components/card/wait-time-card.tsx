import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";

const WaitTimeCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="uppercase text-base text-muted-foreground tracking-wider">
        Est. Wait Time
      </CardTitle>
      <CardAction>
        <Clock className="text-muted-foreground" />
      </CardAction>
    </CardHeader>
    <CardContent className="-mt-3 space-y-1">
      <p className="text-5xl font-bold">
        12<span className="text-xl mx-1">Min</span>
      </p>
      <p className="text-base text-muted-foreground">
        Avg Processing Time: 8.5 Mins
      </p>
    </CardContent>
  </Card>
);

export default WaitTimeCard;
