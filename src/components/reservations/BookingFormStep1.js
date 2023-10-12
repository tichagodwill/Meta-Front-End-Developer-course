import {
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import Section from "../Section";
import Pictures from "./Pictures";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alertContext";

function BookingFormStep1({
  step,
  prevStep,
  nextStep,
  updateFormData,
  values,
}) {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
    },
    onSubmit: (vals) => {
      const newValues = { ...values, ...vals };
      updateFormData(newValues);
      submit("https://mock.com/reservation", newValues);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Please enter your first name"),
      lastName: Yup.string().required("Please enter your last name"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter your email"),
      comments: Yup.string().max(255, "Max 255 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        nextStep();
      } else {
        onOpen(response.type, response.message);
      }
    }
    // eslint-disable-next-line
  }, [response]);

  return (
    <Stack
      as={"form"}
      onSubmit={formik.handleSubmit}
      style={{ minHeight: "100%", gap: 0 }}
    >
      <Section bg={"primaryGreen.100"}>
        <Heading variant={"hero1"} alignSelf={"flex-start"}>
          Contacts
        </Heading>
        <FormControl
          isRequired
          isInvalid={!!formik.errors.firstName && formik.touched.firstName}
        >
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            data-testid="firstName"
            id="firstName"
            name="firstName"
            {...formik.getFieldProps("firstName")}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!formik.errors.lastName && formik.touched.lastName}
        >
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            data-testid="lastName"
            id="lastName"
            name="lastName"
            {...formik.getFieldProps("lastName")}
          />
          <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!formik.errors.email && formik.touched.email}
        >
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <Input
            data-testid="email"
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={!!formik.errors.comments && formik.touched.comments}
        >
          <FormLabel htmlFor="comments">Special Request</FormLabel>
          <Textarea
            data-testid="comments"
            id="comments"
            name="comments"
            {...formik.getFieldProps("comments")}
          />
          <FormErrorMessage>{formik.errors.comments}</FormErrorMessage>
        </FormControl>
      </Section>
      <Pictures step={step}>
        <Stack direction="row" justifyContent={"space-between"} gap={"30px"}>
          <Button
            variant="primaryYellow"
            onClick={prevStep}
            flexGrow={"1"}
            isDisabled={isLoading}
          >
            Back
          </Button>
          <Button
            data-testid="submit"
            variant="primaryYellow"
            type="submit"
            flexGrow={"1"}
            isDisabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Submit"}
          </Button>
        </Stack>
      </Pictures>
    </Stack>
  );
}

export default BookingFormStep1;
