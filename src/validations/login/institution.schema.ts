import { z } from "zod";

export const institutionLoginSchema = z.object({
  institutionId: z.string().min(5, "Hospital ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  stayLogged: z.boolean().optional(),
});

export type InstitutionLoginValues = z.infer<typeof institutionLoginSchema>;
