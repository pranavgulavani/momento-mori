import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Button } from "../ui/button";

type CardProps = React.ComponentProps<typeof Card>;

export default function MomentoForm({ className, ...props }: CardProps) {
  return (
    <div className="flex-grow flex justify-center items-center">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardDescription>Please fill the details</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button variant="default" className={cn("w-full")}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
