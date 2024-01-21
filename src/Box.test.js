import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Box from "./Box";

// Smoke Test
it("renders without crashing", () => {
  render(<Box width="100" height="100" backgroundColor="blue" />);
});

// Snapshot Test
it("matches snapshot", () => {
  const { asFragment } = render(
    <Box width="100" height="100" backgroundColor="blue" />
  );
  expect(asFragment()).toMatchSnapshot();
});

// Box Removal Test
it('uses the removeBox function when the "X" button is clicked', () => {
  const removeBoxMock = jest.fn();
  const { getByText } = render(
    <Box
      width="100"
      height="100"
      backgroundColor="blue"
      removeBox={removeBoxMock}
    />
  );
  const removeButton = getByText("X");
  fireEvent.click(removeButton);
  expect(removeBoxMock).toHaveBeenCalled();
});
