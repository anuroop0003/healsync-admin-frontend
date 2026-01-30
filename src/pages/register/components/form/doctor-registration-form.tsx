import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDoctorRegistration } from "@/services/query/register/register.api";
import type { DoctorRegistrationValues } from "@/validations/register/doctor.schema";
import { doctorRegistrationSchema } from "@/validations/register/doctor.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  Briefcase,
  FileBadge,
  Fingerprint,
  GraduationCap,
  Loader2,
  Phone,
  Stethoscope,
  User,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const DoctorRegistrationForm = () => {
  const navigate = useNavigate();
  const { mutate: registerDoctor, isPending } = useDoctorRegistration();

  const { control, handleSubmit } = useForm<DoctorRegistrationValues>({
    resolver: zodResolver(doctorRegistrationSchema as any),
    defaultValues: {
      first_name: "",
      last_name: "",
      phone: "",
      aadhaar_number: "",
      specialization: "",
      qualification: "",
      license_number: "",
      department_id: [],
      institution_id: "",
      experience: 0,
    },
  });

  const onSubmit = (data: DoctorRegistrationValues) => {
    registerDoctor(data, {
      onSuccess: () => {
        alert("Doctor registered successfully!");
        navigate("/login");
      },
      onError: (error: any) => {
        alert(error?.message || "Registration failed. Please try again.");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <FieldGroup>
        <div className="grid grid-cols-3 gap-4">
          <Controller
            name="first_name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>First Name</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="Raj" />
                  <InputGroupAddon>
                    <User />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="last_name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Last Name</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="Kumar" />
                  <InputGroupAddon>
                    <User />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Phone</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="9876543210" />
                  <InputGroupAddon>
                    <Phone />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="aadhaar_number"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Aadhaar</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="123456789012" />
                  <InputGroupAddon>
                    <Fingerprint />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="specialization"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Specialization</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="Cardiology" />
                  <InputGroupAddon>
                    <Stethoscope />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="qualification"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Qualification</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="MD, DM" />
                  <InputGroupAddon>
                    <GraduationCap />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="license_number"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>License</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="MCI-2024" />
                  <InputGroupAddon>
                    <FileBadge />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="experience"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Experience</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} type="number" placeholder="10" />
                  <InputGroupAddon>
                    <Briefcase />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="institution_id"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Institution</FieldLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full h-10 px-3 py-2 text-sm border rounded-md">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="f4859e50-43ea-40b8-bc75-15fb0b9b78e8">
                      City General Hospital
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
          <Controller
            name="department_id"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Department</FieldLabel>
                <Select
                  onValueChange={(val) => field.onChange([val])}
                  value={field.value?.[0]}
                >
                  <SelectTrigger className="w-full h-10 px-3 py-2 text-sm border rounded-md">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0b0fc605-36ec-4f0c-842d-8caa62f5ca64">
                      Cardiology
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />
        </div>

        <div className="flex justify-end gap-6">
          <Button type="button" variant="outline" asChild>
            <Link to="/login" className="flex items-center justify-center">
              Cancel
            </Link>
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Register
          </Button>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span className="text-muted-foreground">
              Already have an account?
            </span>
            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <ArrowLeft />
              Back to Login
            </Link>
          </div>
        </div>
      </FieldGroup>
    </form>
  );
};

export default DoctorRegistrationForm;
