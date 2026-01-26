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
  hospitalLoginSchema,
  type HospitalLoginValues,
} from "@/validations/login/hospital.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Hospital, KeyRound } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const HospitalForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<HospitalLoginValues>({
    resolver: zodResolver(hospitalLoginSchema),
    defaultValues: {
      hospitalId: "",
      password: "",
      stayLogged: true,
    },
  });

  const onSubmit = (data: HospitalLoginValues) => {
    console.log("Hospital Login:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="hospitalId"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Field>
              <FieldLabel>Hospital ID</FieldLabel>
              <InputGroup>
                <InputGroupInput {...field} placeholder="HOSP-00-00-00" />
                <InputGroupAddon>
                  <Hospital />
                </InputGroupAddon>
              </InputGroup>
              <FieldError className="-mt-2">{error?.message}</FieldError>
            </Field>
          )}
        />

        {/* Password */}
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
                id="hospital-stay"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
              <FieldLabel
                htmlFor="hospital-stay"
                className="font-normal cursor-pointer"
              >
                Stay logged in
              </FieldLabel>
            </Field>
          )}
        />

        <Button type="submit" className="w-full">
          Sign In
        </Button>

        <FieldDescription className="text-center">
          Don&apos;t have an account? <a href="#">Sign up</a>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
};

export default HospitalForm;
