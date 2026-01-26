import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ShieldCheck, Stethoscope } from "lucide-react";

const DoctorForm = () => {
  return (
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel>Doctor ID</FieldLabel>
          <InputGroup>
            <InputGroupInput placeholder="DOCT-00-00-00" />
            <InputGroupAddon>
              <Stethoscope />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>
          <Input type="password" />
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="doctor-stay" defaultChecked />
          <FieldLabel
            htmlFor="doctor-stay"
            className="font-normal cursor-pointer"
          >
            Stay logged in
          </FieldLabel>
        </Field>

        <Button className="w-full">Sign In</Button>

        <div className="flex items-center justify-center gap-2 text-gray-500">
          <ShieldCheck className="size-4" />
          <span className="text-xs uppercase font-medium tracking-wider">
            Secure Access Portal
          </span>
        </div>
      </FieldGroup>
    </form>
  );
};

export default DoctorForm;
