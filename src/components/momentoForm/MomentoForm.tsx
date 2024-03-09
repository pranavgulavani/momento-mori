import { calculateTimeInWeeks, cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type CardProps = React.ComponentProps<typeof Card>;
type MomentoForm = {
  handleSetData: (
    weekSpent: number,
    weeksRemaining: number,
    spentLifeInPecentage: number,
    age: number
  ) => void;
};

const formSchema = z.object({
  dob: z.string({
    required_error: "A date of birth is required.",
  }),
  expectancy: z.coerce
    .number({ required_error: "Expectancy is required" })
    .max(150, { message: "expectancy should be less than 150" })
    .positive({ message: "expectancy should be greater than 0" }),
});

export default function MomentoForm({
  className,
  handleSetData,
  ...props
}: CardProps & MomentoForm) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dob: "2024-02-09",
      expectancy: 50,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated
    const birthday = new Date(form.getValues("dob"));
    const result = calculateTimeInWeeks(birthday, form.getValues("expectancy"));
    console.log(result, "result");
    const spentLifeInPecentage =
      (result.weeksSpent / (result.weeksSpent + result.weeksRemaining)) * 100;
    handleSetData(
      result.weeksSpent,
      result.weeksRemaining,
      spentLifeInPecentage,
      result.ageInYears
    );
    console.log(values);
  }
  return (
    <div>
      <Card className={cn(" w-[350px]  md:w-[380px] mx-2 md:mx-auto h-96")}>
        <CardHeader>
          <CardDescription>Please fill the details</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Birthday</FormLabel>
                    <FormControl>
                      <Input placeholder="birthdate" {...field} type="date" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectancy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expectancy</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="expectancy"
                        {...field}
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="default" className={cn("w-full")} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
