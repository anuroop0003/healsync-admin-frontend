import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorForm from "./form/doctor-form";
import InstitutionForm from "./form/institution-form";

const AuthCard = () => {
  return (
    <Card className="w-sm">
      <CardHeader>
        <CardTitle className="font-bold text-xl">Sign In</CardTitle>
        <CardDescription>
          Welcome back. Please select the role to continue.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="institution">
          <TabsList className="grid grid-cols-2 w-full h-12! mb-3">
            <TabsTrigger
              value="institution"
              className="data-[state=active]:border-2 data-[state=active]:border-primary cursor-pointer"
            >
              Institution
            </TabsTrigger>
            <TabsTrigger
              value="doctor"
              className="data-[state=active]:border-2 data-[state=active]:border-primary cursor-pointer"
            >
              Doctor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="institution">
            <InstitutionForm />
          </TabsContent>

          <TabsContent value="doctor">
            <DoctorForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AuthCard;
