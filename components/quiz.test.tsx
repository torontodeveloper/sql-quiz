import { render, screen } from "@testing-library/react";
import Quiz from "./quiz";

test("Testing Quiz", () => {
  render(<Quiz />);
  const element = screen.findByLabelText("Quiz");
  expect(element.textContent).toBe("Quiz");
});
