import { ScrollArea } from "@/components/ui/scroll-area";
import AppointmentPanel from "@/pages/institution/patient-details/components/appointment-panel";
import ActiveConsultation from "@/pages/institution/patient-details/components/consulatation/active-consultation";
import ConsultationFooter from "@/pages/institution/patient-details/components/footer";
import ConsultationHeader from "@/pages/institution/patient-details/components/header";
import MedicalHistory from "@/pages/institution/patient-details/components/medical-history";

const PatientLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <ConsultationHeader />

      <div className="flex flex-1 overflow-hidden">
        <ScrollArea className="w-sm shrink-0">
          <MedicalHistory />
        </ScrollArea>

        <ScrollArea className="flex-1">
          <ActiveConsultation />
        </ScrollArea>

        <ScrollArea className="w-sm shrink-0">
          <AppointmentPanel />
        </ScrollArea>
      </div>

      <ConsultationFooter />
    </div>
  );
};

export default PatientLayout;
