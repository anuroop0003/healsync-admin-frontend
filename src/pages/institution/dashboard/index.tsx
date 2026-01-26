import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bell,
  CheckCircle2,
  CircleSmall,
  Clock,
  Dot,
  Eye,
  Loader2,
  Play,
  Search,
  Ticket,
} from "lucide-react";

const InstitutionDashboard = () => {
  const patients = [
    {
      token: "#19",
      name: "Michael Henderson",
      gender: "M",
      age: 42,
      visitType: "Regular Checkup",
      time: "10:15 AM",
      status: "Waiting",
    },
    {
      token: "#20",
      name: "Sarah Jenkins",
      gender: "F",
      age: 29,
      visitType: "Lab Review",
      time: "10:30 AM",
      status: "Waiting",
    },
    {
      token: "#21",
      name: "David Miller",
      gender: "M",
      age: 56,
      visitType: "Follow-up",
      time: "10:45 AM",
      status: "Waiting",
    },
    {
      token: "#22",
      name: "Emma Thompson",
      gender: "F",
      age: 34,
      visitType: "Consultation",
      time: "11:00 AM",
      status: "Upcoming",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
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

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
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
            <Button className="cursor-pointer w-full" variant="secondary">
              Mark as Completed
            </Button>
          </CardFooter>
        </Card>

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
      </div>

      {/* Queue */}
      <Card>
        <CardHeader>
          <CardTitle className="uppercase text-base">Next Patients</CardTitle>
          <CardAction>
            <InputGroup className="max-w-xs">
              <InputGroupInput placeholder="Search queue..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="uppercase tracking-wider">
                  Token
                </TableHead>
                <TableHead className="uppercase tracking-wider">
                  Patient Name
                </TableHead>
                <TableHead className="uppercase tracking-wider">
                  Arrival Time
                </TableHead>
                <TableHead className="uppercase tracking-wider">
                  Status
                </TableHead>
                <TableHead className="uppercase tracking-wider">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((p) => (
                <TableRow key={p.token}>
                  <TableCell className="text-muted-foreground font-semibold">
                    {p.token}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-base font-medium leading-tight">
                        {p.name}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center">
                        {p.gender}, {p.age}y <Dot /> {p.visitType}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-muted-foreground">
                    {p.time}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1.5 rounded-md leading-none p-1 text-muted-foreground"
                    >
                      {p.status === "Waiting" && (
                        <Clock className="h-3.5 w-3.5 text-amber-500" />
                      )}
                      {p.status === "Upcoming" && (
                        <Loader2 className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      {p.status === "Completed" && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                      )}
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" className="cursor-pointer">
                      <Eye />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <Button variant="link" className="cursor-pointer">
                    View full queue (24 more)
                  </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionDashboard;
