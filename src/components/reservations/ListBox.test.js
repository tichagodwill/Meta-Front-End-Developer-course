import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import ListBox from "./ListBox";
import { FaClock } from "react-icons/fa6";
import { Formik } from "formik";
import { act } from "react-dom/test-utils";

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

test("Test Custom ListBox Visibility", async () => {
  const availableTimes = ["17:00", "17:30"];

  render(
    <Formik>
      <ListBox
        data-testid="time"
        name="time"
        id="time"
        config={{ icon: FaClock, double: true, values: availableTimes }}
      ></ListBox>
    </Formik>
  );

  expect(screen.getByTestId("time")).toBeVisible();
  expect(screen.queryByText("17:00")).toBeNull();

  act(() => {
    fireEvent.click(screen.getByTestId("time"));
  });

  waitFor(() => {
    expect(screen.queryByText("17:00")).not.toBeNull();
  });
});

test("Test Custom ListBox Selection", async () => {
  const availableTimes = ["17:00", "17:30"];
  const initValues = { time: "" };
  render(
    <Formik
      initialValues={initValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <ListBox
        data-testid="time"
        name="time"
        id="time"
        config={{ icon: FaClock, double: true, values: availableTimes }}
      ></ListBox>
    </Formik>
  );

  act(() => {
    fireEvent.click(screen.getByTestId("time"));
  });

  waitFor(() => {
    expect(screen.queryByText("17:00")).not.toBeNull();
    expect(screen.queryByText("17:30")).not.toBeNull();
  });

  act(() => {
    fireEvent.click(screen.queryByText("17:00"));
  });

  waitFor(() => {
    expect(screen.queryByText("17:00")).not.toBeNull();
    expect(screen.queryByText("17:30")).toBeNull();
  });
});
