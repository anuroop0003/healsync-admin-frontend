import { z } from "zod";

export const doctorRegistrationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  aadhaar_number: z.string().length(12, "Aadhaar number must be 12 digits"),
  specialization: z.string().min(1, "Specialization is required"),
  qualification: z.string().min(1, "Qualification is required"),
  license_number: z.string().min(1, "License number is required"),
  department_id: z
    .array(z.string())
    .min(1, "At least one department is required"),
  institution_id: z.string().min(1, "Institution is required"),
  experience: z.coerce.number().min(0, "Experience must be a positive number"),
});

export type DoctorRegistrationValues = z.infer<typeof doctorRegistrationSchema>;
