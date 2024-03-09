import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Create a function to calculate number of weeks spent by user
export function calculateTimeInWeeks(
  birthDate: Date,
  lifeExpectancy: number
): { weeksSpent: number; weeksRemaining: number; ageInYears: number } {
  const birth = birthDate;

  const expectancy = lifeExpectancy;

  const currentTime = new Date();

  const ageInMilliseconds = currentTime.getTime() - birth.getTime();

  const currentMonth = currentTime.getMonth();
  const birthMonth = birth.getMonth();
  console.log(currentMonth, birthMonth);
  const ageInYears = Math.floor(
    ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  );

  console.log("Age in Years :", ageInYears);

  const yearsRemaining = lifeExpectancy - ageInYears;
  console.log("Years remaining :", yearsRemaining);

  let weeksSpent = ageInYears * 52;
  console.log("Weeks spent :", weeksSpent);

  const millisecondsInWeek = 1000 * 60 * 60 * 24 * 7;
  const weeksElapsed = Math.floor(ageInMilliseconds / millisecondsInWeek);

  // if (birthMonth < currentMonth) {
  //   // Check if the birth date day is after the current day
  //   if (birth.getDate() > currentTime.getDate()) {
  //     weeksSpent -= 1; // Subtract 1 week if the birth date is later in the month
  //   }
  // } else if (birthMonth === currentMonth) {
  //   weeksSpent += weeksElapsed; // Add the weeks elapsed within the current month
  // }

  const weeksRemaining = yearsRemaining * 52;

  console.log("Weeks in Remaining :", weeksRemaining);

  return { weeksSpent, weeksRemaining, ageInYears };
}
