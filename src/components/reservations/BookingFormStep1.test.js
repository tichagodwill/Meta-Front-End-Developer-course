import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import BookingFormStep1 from "./BookingFormStep1";
import { AlertProvider } from "../../context/alertContext";
import Alert from "../../components/Alert";
import { Formik } from "formik";

jest.mock("../../hooks/useSubmit", () => {
  return () => ({
    isLoading: false,
    response: "",
    submit: jest.fn(),
  });
});

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

test("Test submit empty form", async () => {
  const mockUpdateFormData = jest.fn();

  render(
    <AlertProvider>
      <Formik>
        <BookingFormStep1
          updateFormData={mockUpdateFormData}
          values={defValues}
        ></BookingFormStep1>
      </Formik>
    </AlertProvider>
  );

  expect(screen.queryByText("Please enter your first name")).toBeNull();
  expect(screen.queryByText("Please enter your last name")).toBeNull();
  expect(screen.queryByText("Please enter your email")).toBeNull();
  expect(screen.queryByText("Please enter a valid email address")).toBeNull();
  expect(mockUpdateFormData).not.toBeCalled();

  fireEvent.click(screen.getByTestId("submit"));

  await waitFor(() => {
    expect(screen.queryByText("Please enter your first name")).not.toBeNull();
    expect(screen.queryByText("Please enter your last name")).not.toBeNull();
    expect(screen.queryByText("Please enter your email")).not.toBeNull();
    expect(screen.queryByText("Please enter a valid email address")).toBeNull();
    expect(mockUpdateFormData).not.toBeCalled();
  });
});

test("Test submit invalid email", async () => {
  const mockUpdateFormData = jest.fn();

  render(
    <AlertProvider>
      <Formik>
        <BookingFormStep1
          updateFormData={mockUpdateFormData}
          values={defValues}
        ></BookingFormStep1>
      </Formik>
    </AlertProvider>
  );

  expect(screen.queryByText("Please enter your first name")).toBeNull();
  expect(screen.queryByText("Please enter your last name")).toBeNull();
  expect(screen.queryByText("Please enter your email")).toBeNull();
  expect(mockUpdateFormData).not.toBeCalled();

  fireEvent.change(screen.getByTestId("email"), { target: { value: "score" } });
  fireEvent.click(screen.getByTestId("submit"));

  await waitFor(() => {
    expect(screen.queryByText("Please enter your first name")).not.toBeNull();
    expect(screen.queryByText("Please enter your last name")).not.toBeNull();
    expect(
      screen.queryByText("Please enter a valid email address")
    ).not.toBeNull();
    expect(mockUpdateFormData).not.toBeCalled();
  });
});

test("Test submit valid form", async () => {
  const mockUpdateFormData = jest.fn();
  render(
    <AlertProvider>
      <BookingFormStep1
        updateFormData={mockUpdateFormData}
        values={defValues}
      ></BookingFormStep1>
      <Alert />
    </AlertProvider>
  );

  fireEvent.change(screen.getByTestId("firstName"), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByTestId("lastName"), {
    target: { value: "Doe" },
  });
  fireEvent.change(screen.getByTestId("email"), {
    target: { value: "john.doe@gmail.com" },
  });
  await waitFor(() => {
    fireEvent.click(screen.getByTestId("submit"));
  });

  await waitFor(() => {
    expect(screen.queryByText("Please enter your first name")).toBeNull();
    expect(screen.queryByText("Please enter your last name")).toBeNull();
    expect(screen.queryByText("Please enter a valid email address")).toBeNull();
    expect(mockUpdateFormData).toHaveBeenCalledWith({
      comments: "",
      date: null,
      diners: "",
      email: "john.doe@gmail.com",
      firstName: "John",
      lastName: "Doe",
      occasion: "",
      seating: "1",
      time: "",
    });
  });
});
