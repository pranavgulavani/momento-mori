import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Create a function to calculate number of weeks spent by user
export function calculateTimeInWeeks(
  birthDate: Date,
  lifeExpectancy: number
): { weeksSpent: number; weeksRemaining: number } {
  const birth = birthDate;

  const expectancy = lifeExpectancy;

  const currentTime = new Date();

  const ageInMilliseconds = currentTime.getTime() - birth.getTime();

  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  console.log("Age in Years :", ageInYears);

  const yearsRemaining = lifeExpectancy - ageInYears;
  console.log("Years remaining :", yearsRemaining);

  const weeksSpent = ageInYears * 52;
  console.log("Weeks spent :", weeksSpent);

  const weeksRemaining = yearsRemaining * 52;

  console.log("Weeks in Remaining :", weeksRemaining);

  return { weeksSpent, weeksRemaining };
}
