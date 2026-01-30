import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InstitutionRegistrationForm from "../components/form/institution-registration-form";

const InstitutionRegistrationPage = () => {
  return (
    <div className="bg-muted flex min-h-svh items-center justify-center p-6">
      <Card className="w-5xl">
        <CardHeader>
          <CardTitle className="font-bold text-3xl">
            Register Institution
          </CardTitle>
          <CardDescription className="text-base">
            Onboard your hospital or clinic to the HealSync ecosystem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InstitutionRegistrationForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default InstitutionRegistrationPage;
