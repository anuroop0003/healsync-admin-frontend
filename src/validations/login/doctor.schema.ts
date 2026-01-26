import { z } from "zod";

export const hospitalLoginSchema = z.object({
  hospitalId: z.string().min(5, "Hospital ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  stayLogged: z.boolean().optional(),
});

export type HospitalLoginValues = z.infer<typeof hospitalLoginSchema>;
