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
  institutionLoginSchema,
  type InstitutionLoginValues,
} from "@/validations/login/institution.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Hospital, KeyRound } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const InstitutionForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<InstitutionLoginValues>({
    resolver: zodResolver(institutionLoginSchema),
    defaultValues: {
      institutionId: "",
      password: "",
      stayLogged: true,
    },
  });

  const onSubmit = (data: InstitutionLoginValues) => {
    console.log("Hospital Login:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="institutionId"
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
                className="rounded-[3px] cursor-pointer"
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

        <Button type="submit">Sign In</Button>

        <FieldDescription className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register/institution">Sign up</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
};

export default InstitutionForm;
