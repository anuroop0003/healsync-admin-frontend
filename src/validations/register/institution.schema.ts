import { z } from "zod";

export const institutionRegistrationSchema = z.object({
  name: z.string().min(1, "Institution name is required"),
  type: z.enum(["hospital", "clinic", "diagnostic_center", "other"]),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  license_number: z.string().min(1, "License number is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  aadhaar_number: z.coerce
    .number()
    .min(100000000000, "Aadhaar number must be at least 12 digits"),
});

export type InstitutionRegistrationValues = z.infer<
  typeof institutionRegistrationSchema
>;
