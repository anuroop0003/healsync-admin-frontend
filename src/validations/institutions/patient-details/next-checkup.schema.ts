import z from "zod";

export const nextCheckupSchema = z.object({
  date: z.date(),
  startTime: z
    .string()
    .optional()
    .refine((v) => v !== undefined, {
      message: "Start time required",
    }),
  duration: z
    .string()
    .optional()
    .refine((v) => v !== undefined, {
      message: "Duration required",
    }),
});

export type NextCheckupValues = z.infer<typeof nextCheckupSchema>;
