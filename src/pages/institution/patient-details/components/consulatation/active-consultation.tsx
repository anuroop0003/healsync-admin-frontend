import { Card } from "@/components/ui/card";
import Header from "./components/header";
import PendingAnalysis from "./components/pending-analysis";
import UploadBox from "./components/upload-box";

const ActiveConsultation = () => {
  return (
    <Card className="p-6 border-0 shadow-none">
      <Header />
      <UploadBox />
      <PendingAnalysis />
    </Card>
  );
};

export default ActiveConsultation;
