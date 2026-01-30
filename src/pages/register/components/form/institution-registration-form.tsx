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
import { useInstitutionRegistration } from "@/services/query/register/register.api";
import {
  institutionRegistrationSchema,
  type InstitutionRegistrationValues,
} from "@/validations/register/institution.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  Building2,
  FileText,
  Fingerprint,
  Globe,
  Hospital,
  Landmark,
  Loader2,
  Map as MapIcon,
  Phone,
} from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const InstitutionRegistrationForm = () => {
  const navigate = useNavigate();
  const { mutate: registerInstitution, isPending } =
    useInstitutionRegistration();

  const { control, handleSubmit } = useForm<InstitutionRegistrationValues>({
    resolver: zodResolver(institutionRegistrationSchema as any),
    defaultValues: {
      name: "",
      type: "hospital",
      address: "",
      city: "",
      state: "",
      country: "India",
      license_number: "",
      phone: "",
      aadhaar_number: "",
    },
  });

  const onSubmit = (data: InstitutionRegistrationValues) => {
    registerInstitution(data, {
      onSuccess: () => {
        alert("Institution registered successfully!");
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
            name="name"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Institution Name</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    placeholder="City General Hospital"
                  />
                  <InputGroupAddon>
                    <Hospital />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />

          <Controller
            name="type"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Institution Type</FieldLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full h-10 px-3 py-2 text-sm border rounded-md">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospital">Hospital</SelectItem>
                    <SelectItem value="clinic">Clinic</SelectItem>
                    <SelectItem value="diagnostic_center">
                      Diagnostic Center
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />

          <Controller
            name="address"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Address</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    {...field}
                    placeholder="123 Medical Center Drive"
                  />
                  <InputGroupAddon>
                    <Building2 />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />

          <Controller
            name="city"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>City</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="Mumbai" />
                  <InputGroupAddon>
                    <MapIcon />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />

          <Controller
            name="state"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>State</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="Maharashtra" />
                  <InputGroupAddon>
                    <Landmark />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError className="-mt-2">{error?.message}</FieldError>
              </Field>
            )}
          />

          <Controller
            name="country"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Field>
                <FieldLabel>Country</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="India" />
                  <InputGroupAddon>
                    <Globe />
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
                <FieldLabel>License Number</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="MH-HSP-2024-009" />
                  <InputGroupAddon>
                    <FileText />
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
                  <InputGroupInput {...field} placeholder="9995643204" />
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
                <FieldLabel>Aadhaar Number</FieldLabel>
                <InputGroup>
                  <InputGroupInput {...field} placeholder="456456897634" />
                  <InputGroupAddon>
                    <Fingerprint />
                  </InputGroupAddon>
                </InputGroup>
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

export default InstitutionRegistrationForm;
