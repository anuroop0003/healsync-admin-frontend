import { z } from "zod";

export const doctorLoginSchema = z.object({
  doctorId: z.string().min(5, "Doctor ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  stayLogged: z.boolean().optional(),
});

export type DoctorLoginValues = z.infer<typeof doctorLoginSchema>;
