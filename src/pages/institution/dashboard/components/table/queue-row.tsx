import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { CheckCircle2, Clock, Dot, Eye, Loader2 } from "lucide-react";

const StatusBadge = ({ status }: { status: string }) => (
  <Badge variant="outline" className="flex items-center gap-1.5">
    {status === "Waiting" && <Clock className="h-3.5 w-3.5 text-amber-500" />}
    {status === "Upcoming" && (
      <Loader2 className="h-3.5 w-3.5 text-slate-400" />
    )}
    {status === "Completed" && (
      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
    )}
    {status}
  </Badge>
);

const QueueRow = ({ patient }: { patient: any }) => (
  <TableRow>
    <TableCell className="font-semibold text-muted-foreground">
      {patient.token}
    </TableCell>

    <TableCell>
      <div className="flex flex-col">
        <span className="font-medium">{patient.name}</span>
        <span className="text-xs text-muted-foreground flex items-center">
          {patient.gender}, {patient.age}y <Dot /> {patient.visitType}
        </span>
      </div>
    </TableCell>

    <TableCell className="text-muted-foreground">{patient.time}</TableCell>

    <TableCell>
      <StatusBadge status={patient.status} />
    </TableCell>

    <TableCell className="text-right">
      <Button size="icon">
        <Eye />
      </Button>
    </TableCell>
  </TableRow>
);

export default QueueRow;
