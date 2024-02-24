import App from "@/App";
import { render, screen } from "@testing-library/react";

test("should contain header", () => {
  //Arrange
  render(<App />);
  // Assert
  expect(screen.getByText(/Momento Mori/i)).toBeInTheDocument();
});

test("should contain footer with right year", () => {
  //Arrange
  render(<App />);
  //Act
  const date = new Date().getFullYear();
  console.log(date);
  const footer = `© ${date} Pranav Gulavani`;
  console.log(footer);
  //Assert
  expect(screen.getByText(footer)).toBeInTheDocument();
});
