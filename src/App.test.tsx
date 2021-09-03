import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders cards list", () => {
  render(<App />);
  const title = screen.getByText(/cards/i);
  expect(title).toBeInTheDocument();
});
