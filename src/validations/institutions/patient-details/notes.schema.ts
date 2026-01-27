import z from "zod";

export const notesSchema = z.object({
  notes: z.string().min(1, "Notes cannot be empty"),
});

export type NotesValues = z.infer<typeof notesSchema>;
