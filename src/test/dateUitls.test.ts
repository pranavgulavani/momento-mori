import { calculateTimeInWeeks } from "@/lib/utils";

test("calculateTimeInWeeks returns the correct weeks spent and remaining", () => {
  //Arrange
  const birthDate = new Date("1992-01-01");
  const lifeExpectancy = 80;

  //Act
  const { weeksSpent, weeksRemaining } = calculateTimeInWeeks(
    birthDate,
    lifeExpectancy
  );

  //Assert
  expect(weeksSpent).toBeGreaterThan(0);
  expect(weeksRemaining).toBeGreaterThan(0);
});
