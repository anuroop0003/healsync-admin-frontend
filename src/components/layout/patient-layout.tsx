import AppointmentPanel from "@/pages/institution/patient-details/components/appointment-panel";
import ActiveConsultation from "@/pages/institution/patient-details/components/consulatation/active-consultation";
import MedicalHistory from "@/pages/institution/patient-details/components/medical-history";

type Props = {};

const PatientLayout = (props: Props) => {
  return (
    <div className="flex">
      <MedicalHistory />
      <ActiveConsultation />
      <AppointmentPanel />
    </div>
  );
};

export default PatientLayout;
