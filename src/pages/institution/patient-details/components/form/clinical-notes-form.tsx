import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import {
  notesSchema,
  type NotesValues,
} from "@/validations/institutions/patient-details/notes.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { NotebookPen, Printer, Share2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

const ClinicalNotesForm = () => {
  const { control, handleSubmit } = useForm<NotesValues>({
    resolver: zodResolver(notesSchema),
    defaultValues: {
      notes: "",
    },
  });

  const onSubmit = (data: NotesValues) => {
    console.log("Clinical Notes:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="rounded-none border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-xs flex items-center gap-2 tracking-wider font-bold text-muted-foreground">
            <NotebookPen className="size-4" />
            CLINICAL NOTES
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Field>
            <Controller
              name="notes"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Textarea
                    {...field}
                    placeholder="Document clinical findings, observations, or private notes for this session..."
                    className="min-h-35"
                  />
                  <FieldError className="-mt-2">{error?.message}</FieldError>
                </>
              )}
            />
          </Field>
        </CardContent>

        <CardFooter className="text-muted-foreground flex items-center">
          <p className="text-xs flex-1">Last edit: 2m ago</p>
          <Button size="icon" variant="ghost" className="cursor-pointer">
            <Printer />
          </Button>
          <Button size="icon" variant="ghost" className="cursor-pointer">
            <Share2 />
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ClinicalNotesForm;
