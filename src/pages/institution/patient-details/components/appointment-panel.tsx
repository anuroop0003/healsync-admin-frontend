import ClinicalNotesForm from "./form/clinical-notes-form";
import NextCheckupForm from "./form/next-checkup-form";

const AppointmentPanel = () => {
  return (
    <div className="w-sm shrink-0 border-l divide-y overflow-auto">
      <NextCheckupForm />
      <ClinicalNotesForm />
    </div>
  );
};

export default AppointmentPanel;
