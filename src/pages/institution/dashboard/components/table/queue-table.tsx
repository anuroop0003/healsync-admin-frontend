import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
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
import { Search } from "lucide-react";
import QueueRow from "./queue-row";

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

const QueueTable = () => (
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
            <TableHead className="uppercase tracking-wider">Token</TableHead>
            <TableHead className="uppercase tracking-wider">
              Patient Name
            </TableHead>
            <TableHead className="uppercase tracking-wider">
              Arrival Time
            </TableHead>
            <TableHead className="uppercase tracking-wider">Status</TableHead>
            <TableHead className="uppercase tracking-wider w-10">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {patients.map((p) => (
            <QueueRow key={p.token} patient={p} />
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
);

export default QueueTable;
