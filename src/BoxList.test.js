import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoxList from "./BoxList";

// Smoke Test
it("renders without crashing", () => {
  render(<BoxList />);
});

// Snapshot Test
it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Box Addition and Removal Test
it("can add and remove a box", () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);

  // Add a box
  const widthInput = getByLabelText("Width:");
  fireEvent.change(widthInput, { target: { value: "100" } });
  const heightInput = getByLabelText("Height:");
  fireEvent.change(heightInput, { target: { value: "100" } });
  const backgroundColorInput = getByLabelText("Background Color:");
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });
  fireEvent.click(getByText("Add Box"));

  // Check that the box was added
  const removeButton = getByText("X");
  expect(removeButton).toBeInTheDocument();

  // Remove the box
  fireEvent.click(removeButton);

  // Check that the box was removed
  expect(queryByText("X")).not.toBeInTheDocument();
});
