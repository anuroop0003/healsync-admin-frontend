import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { UploadCloud } from "lucide-react";
import FilePreview from "./file-preview";

const files = [
  { name: "Chest_XRay_Report.pdf", size: "2.4 MB", type: "pdf" },
  { name: "Prescription_Oct10.jpg", size: "842 KB", type: "image" },
];

const UploadBox = () => (
  <CardContent className="p-6 rounded-lg border-dashed border-2 bg-muted/30 space-y-6">
    <div className="flex flex-col items-center text-center space-y-3">
      <UploadCloud className="h-10 w-10 text-muted-foreground" />
      <div>
        <p className="text-sm font-semibold">
          Upload clinical reports or prescriptions
        </p>
        <p className="text-xs text-muted-foreground">
          Drag & drop multiple files or{" "}
          <span className="text-primary underline cursor-pointer">browse</span>
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground">
        Supported: PDF, JPG, PNG · Max 10MB each
      </p>
    </div>

    <div className="space-y-3 max-h-48 overflow-auto">
      {files.map((file, i) => (
        <FilePreview key={i} {...file} />
      ))}
    </div>

    <div className="flex justify-end">
      <Button size="sm">Upload Files</Button>
    </div>
  </CardContent>
);

export default UploadBox;
