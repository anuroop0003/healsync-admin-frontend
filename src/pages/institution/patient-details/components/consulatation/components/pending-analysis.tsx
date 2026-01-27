import PendingFile from "./pending-file";

const PendingAnalysis = () => (
  <div className="space-y-3">
    <p className="text-xs tracking-wider font-bold text-muted-foreground">
      PENDING ANALYSIS
    </p>

    <PendingFile
      title="Chest_XRay_Report.pdf"
      meta="2.4MB · Uploaded 2m ago"
      note="Left hand is injured, the bone is broken"
    />

    <PendingFile
      title="Prescription_Oct10.jpg"
      meta="842KB · Uploaded 1m ago"
      optional
    />
  </div>
);

export default PendingAnalysis;
