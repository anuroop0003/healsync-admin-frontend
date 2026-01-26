import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
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
  doctorLoginSchema,
  type DoctorLoginValues,
} from "@/validations/login/doctor.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, KeyRound, Stethoscope } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const DoctorForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<DoctorLoginValues>({
    resolver: zodResolver(doctorLoginSchema),
    defaultValues: {
      doctorId: "",
      password: "",
      stayLogged: true,
    },
  });

  const onSubmit = (data: DoctorLoginValues) => {
    console.log("Doctor Login:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="doctorId"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Field>
              <FieldLabel>Doctor ID</FieldLabel>
              <InputGroup>
                <InputGroupInput {...field} placeholder="DOCT-00-00-00" />
                <InputGroupAddon>
                  <Stethoscope />
                </InputGroupAddon>
              </InputGroup>
              <FieldError className="-mt-2">{error?.message}</FieldError>
            </Field>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Field>
              <FieldLabel>Password</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputGroupAddon>
                  <KeyRound className="rotate-45" />
                </InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className="cursor-pointer"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </InputGroupAddon>
              </InputGroup>
              <FieldError className="-mt-2">{error?.message}</FieldError>
            </Field>
          )}
        />

        <Controller
          name="stayLogged"
          control={control}
          render={({ field }) => (
            <Field orientation="horizontal">
              <Checkbox
                id="doctor-stay"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <FieldLabel
                htmlFor="doctor-stay"
                className="font-normal cursor-pointer"
              >
                Stay logged in
              </FieldLabel>
            </Field>
          )}
        />

        <Button type="submit">Sign In</Button>

        <FieldDescription className="text-center">
          Don&apos;t have an account? <a href="#">Sign up</a>
        </FieldDescription>

        {/* <div className="flex items-center justify-center gap-2 text-gray-500">
          <ShieldCheck className="size-4" />
          <span className="text-xs uppercase font-medium tracking-wider">
            Secure Access Portal
          </span>
        </div> */}
      </FieldGroup>
    </form>
  );
};

export default DoctorForm;
