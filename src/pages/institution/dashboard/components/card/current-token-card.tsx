import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play } from "lucide-react";

const CurrentTokenCard = () => (
  <Card className="bg-primary text-white">
    <CardHeader>
      <CardTitle className="uppercase text-base text-muted-foreground tracking-wider">
        Current Token
      </CardTitle>
      <CardAction>
        <Play className="text-muted-foreground" />
      </CardAction>
    </CardHeader>
    <CardContent className="-mt-3 space-y-1">
      <p className="text-5xl font-bold">#18</p>
      <p className="text-base text-muted-foreground">In Chamber</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant="secondary">
        Mark as Completed
      </Button>
    </CardFooter>
  </Card>
);

export default CurrentTokenCard;
