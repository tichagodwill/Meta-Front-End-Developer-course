import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookingFormStep0 from "./BookingFormStep0";

const defValues = {
  seating: "1",
  date: null,
  time: "",
  diners: "",
  occasion: "",
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
};

test("Test Select Time", () => {
  const availableTimes = ["17:00", "17:30"];

  render(
    <BookingFormStep0
      availableTimes={["17:00", "17:30"]}
      values={defValues}
    ></BookingFormStep0>
  );

  expect(screen.getByTestId("time")).toBeVisible();
  expect(screen.queryByText("17:00")).toBeNull();

  fireEvent.click(screen.getByTestId("time"));
  expect(screen.queryByText("17:00")).not.toBeNull();
});

test("Test submit without any selection", async () => {
  const availableTimes = ["17:00", "17:30"];

  render(
    <BookingFormStep0
      step={1}
      availableTimes={["17:00", "17:30"]}
      values={{ ...defValues }}
    />
  );

  expect(screen.queryByText("Please select a date")).toBeNull();
  expect(screen.queryByText("Please select a time")).toBeNull();
  expect(screen.queryByText("Please select a number of diners")).toBeNull();

  fireEvent.click(screen.getByTestId("submit"));

  await waitFor(() => {
    expect(screen.queryByText("Please select a date")).not.toBeNull();
    expect(screen.queryByText("Please select a time")).not.toBeNull();
    expect(
      screen.queryByText("Please select a number of diners")
    ).not.toBeNull();
  });
});

test("Test submit with time", async () => {
  const availableTimes = ["17:00", "17:30"];

  render(
    <BookingFormStep0
      step={1}
      availableTimes={["17:00", "17:30"]}
      values={{ ...defValues }}
    />
  );

  expect(screen.queryByText("Please select a date")).toBeNull();
  expect(screen.queryByText("Please select a time")).toBeNull();
  expect(screen.queryByText("Please select a number of diners")).toBeNull();
  expect(screen.queryByText("17:00")).toBeNull();

  fireEvent.click(screen.getByTestId("time"));
  fireEvent.click(screen.queryByText("17:00"));
  fireEvent.click(screen.getByTestId("submit"));

  await waitFor(() => {
    expect(screen.queryByText("17:00")).not.toBeNull();
    expect(screen.queryByText("Please select a date")).not.toBeNull();
    expect(screen.queryByText("Please select a time")).toBeNull();
    expect(
      screen.queryByText("Please select a number of diners")
    ).not.toBeNull();
  });
});
