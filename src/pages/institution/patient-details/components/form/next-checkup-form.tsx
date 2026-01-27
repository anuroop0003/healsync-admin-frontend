import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  nextCheckupSchema,
  type NextCheckupValues,
} from "@/validations/institutions/patient-details/next-checkup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarDays, CalendarIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

const NextCheckupForm = () => {
  const { control, handleSubmit } = useForm<NextCheckupValues>({
    resolver: zodResolver(nextCheckupSchema),
    defaultValues: {
      date: new Date(),
      startTime: undefined,
      duration: undefined,
    },
  });

  const onSubmit = (data: NextCheckupValues) => {
    console.log("Next Checkup:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="rounded-none border-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-xs flex items-center gap-2 tracking-wider font-bold text-muted-foreground">
            <CalendarDays className="size-4" />
            NEXT CHECK-UP
          </CardTitle>
        </CardHeader>

        <CardContent>
          <FieldGroup className="grid grid-cols-2 gap-6">
            <Field className="col-span-2 gap-2">
              <FieldLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Date
              </FieldLabel>
              <Controller
                name="date"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="justify-between font-normal"
                        >
                          {field.value
                            ? format(field.value, "dd / MM / yyyy")
                            : "Select date"}
                          <CalendarIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-fit">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                    <FieldError className="-mt-2">{error?.message}</FieldError>
                  </>
                )}
              />
            </Field>

            <Field className="gap-2">
              <FieldLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Start Time
              </FieldLabel>

              <Controller
                name="startTime"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Start Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">09:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldError className="-mt-2">{error?.message}</FieldError>
                  </>
                )}
              />
            </Field>

            <Field className="gap-2">
              <FieldLabel className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Duration
              </FieldLabel>
              <Controller
                name="duration"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 mins</SelectItem>
                        <SelectItem value="30">30 mins</SelectItem>
                        <SelectItem value="45">45 mins</SelectItem>
                      </SelectContent>
                    </Select>
                    <FieldError className="-mt-2">{error?.message}</FieldError>
                  </>
                )}
              />
            </Field>

            <Button
              type="submit"
              variant="outline"
              className="col-span-2 text-xs font-bold border-primary cursor-pointer"
            >
              CONFIRM SCHEDULE
            </Button>
          </FieldGroup>
        </CardContent>
      </Card>
    </form>
  );
};

export default NextCheckupForm;
