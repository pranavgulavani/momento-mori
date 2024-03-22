import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Create a function to calculate number of weeks spent by user
export function calculateTimeInWeeks(
  birthDate: Date,
  lifeExpectancy: number
): {
  weeksSpent: number;
  weeksRemaining: number;
  ageInYears: number;
  timeSpentInMonths: number;
  remainingMonths: number;
} {
  // Step 1: Convert date strings to Date objects
  const bDate = new Date(birthDate);
  const currentDate = new Date();

  const ageInMilliseconds = currentDate.getTime() - bDate.getTime();
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  // Step 2: Calculate total number of weeks since birth
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const totalWeeksSinceBirth = Math.floor(
    (currentDate.getTime() - bDate.getTime()) / millisecondsPerWeek
  );

  // Step 3: Calculate remaining life expectancy in weeks
  const remainingWeeks = Math.max(
    0,
    lifeExpectancy * 52 - totalWeeksSinceBirth
  );
  // Calculate Months there are approximately 4.34524 weeks in a month
  const timeSpentInMonths = Math.floor(totalWeeksSinceBirth / 4.34524);
  const remainingMonths = Math.floor(remainingWeeks / 4.34524);

  console.table({
    ageInYears: ageInYears,
    weeksSpent: totalWeeksSinceBirth,
    remainingWeeks: remainingWeeks,
  });

  // Step 4: Return total weeks, weeks spent, and remaining weeks
  return {
    ageInYears,
    weeksSpent: totalWeeksSinceBirth,
    weeksRemaining: remainingWeeks,
    remainingMonths,
    timeSpentInMonths,
  };
}
