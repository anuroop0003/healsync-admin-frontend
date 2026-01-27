import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Circle, FileText, History } from "lucide-react";

const history = [
  {
    date: "OCT 12, 2023",
    title: "Annual Cardiovascular",
    description:
      "Stable BP (120/80), prescribed continued dosage of Lisinopril.",
    file: "ECG_REPORT.PDF",
  },
  {
    date: "JULY 04, 2023",
    title: "Acute Sinusitis",
    description:
      "Full recovery after 10-day antibiotic course. Sinus pressure cleared.",
    status: "Resolved",
  },
  {
    date: "JAN 18, 2023",
    title: "Dermatology Consult",
    description:
      "Benign mole removal on left shoulder. Pathology negative for malignancy.",
  },
  {
    date: "NOV 02, 2022",
    title: "Blood Work - Routine",
    description: "Lipid panel within normal range. Vitamin D deficiency noted.",
  },
];

const MedicalHistory = () => {
  return (
    <Card className="w-sm shrink-0 rounded-none border-0 border-r shadow-none">
      <CardHeader>
        <CardTitle className="text-xs flex items-center gap-2 tracking-wider font-bold text-muted-foreground">
          <History className="size-4" />
          MEDICAL HISTORY
        </CardTitle>
        <CardAction>
          <Button
            variant="link"
            size="xs"
            className="cursor-pointer font-bold text-xs uppercase underline underline-offset-4 tracking-wider"
          >
            View All
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="relative pl-6 space-y-8">
          <div className="absolute left-2 top-0 h-full w-px bg-border" />

          {history.map((item, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-7 top-0 z-10 flex size-6 items-center justify-center rounded-full bg-white">
                <Circle className="size-3 fill-primary text-primary" />
              </span>

              <div className="space-y-2 font-bold">
                <p className="text-xs text-muted-foreground pt-0.75">
                  {item.date}
                </p>
                <h4>{item.title}</h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.description}
                </p>

                {item.file && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-muted-foreground text-xs cursor-pointer"
                  >
                    <FileText />
                    {item.file}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalHistory;
