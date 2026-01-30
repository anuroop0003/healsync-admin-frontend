import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DoctorRegistrationForm from "../components/form/doctor-registration-form";

const DoctorRegistrationPage = () => {
  return (
    <div className="bg-muted flex min-h-svh items-center justify-center p-6">
      <Card className="w-5xl">
        <CardHeader>
          <CardTitle className="font-bold text-3xl">Add Doctor</CardTitle>
          <CardDescription className="text-base">
            Register a new medical practitioner to the system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DoctorRegistrationForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorRegistrationPage;
