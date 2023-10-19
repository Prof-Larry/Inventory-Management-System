import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../src/components/Welcome";

test("renders Welcome component and checks for 'Hello! welcome to IVS' text", () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/Hello! welcome to IVS/i);
  expect(welcomeElement).toBeInTheDocument();
});
