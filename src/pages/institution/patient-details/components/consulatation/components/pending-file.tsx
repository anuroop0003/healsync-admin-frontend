import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { FileText, X } from "lucide-react";

const PendingFile = ({ title, meta, note }: any) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-3">
        <FileText className="size-6 text-muted-foreground" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs font-normal text-muted-foreground">{meta}</p>
        </div>
      </CardTitle>
      <CardAction>
        <Button
          variant="outline"
          size="icon-xs"
          className="cursor-pointer text-destructive"
        >
          <X />
        </Button>
      </CardAction>
    </CardHeader>

    <CardContent className="space-y-2">
      <p className="text-xs text-muted-foreground font-semibold uppercase">
        Doctor’s Contextual Note
      </p>
      <Textarea
        defaultValue={note}
        className="min-h-30"
        placeholder="Enter findings to process alongside the image..."
      />
    </CardContent>

    <CardFooter className="flex justify-end">
      <Button size="sm">Update</Button>
    </CardFooter>
  </Card>
);

export default PendingFile;
