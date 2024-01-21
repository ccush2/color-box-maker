import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewBoxForm from "./NewBoxForm";

// Smoke Test
it("renders without crashing", () => {
  render(<NewBoxForm />);
});

// Snapshot Test
it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

// Form Submission Test
it("calls the addBox function on form submission", () => {
  const addBoxMock = jest.fn();
  const { getByLabelText, getByText } = render(
    <NewBoxForm addBox={addBoxMock} />
  );

  // Fill out the form
  const widthInput = getByLabelText("Width:");
  fireEvent.change(widthInput, { target: { value: "100" } });

  const heightInput = getByLabelText("Height:");
  fireEvent.change(heightInput, { target: { value: "100" } });

  const backgroundColorInput = getByLabelText("Background Color:");
  fireEvent.change(backgroundColorInput, { target: { value: "blue" } });

  // Submit the form
  fireEvent.click(getByText("Add Box"));

  // Expect the addBoxMock to have been called once
  expect(addBoxMock).toHaveBeenCalled();
});
