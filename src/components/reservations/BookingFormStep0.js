import {
  Grid,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Radio,
  RadioGroup,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import {
  FaCalendar,
  FaClock,
  FaUser,
  FaChampagneGlasses,
} from "react-icons/fa6";
import DatePicker from "./DatePicker";
import ListBox from "./ListBox";
import Pictures from "./Pictures";
import Section from "../Section";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

function BookingFormStep0({
  step,
  nextStep,
  updateFormData,
  availableTimes,
  dispatch,
  values,
}) {
  const formik = useFormik({
    initialValues: {
      date: values.date,
      time: values.time,
      diners: values.diners,
      occasion: values.occasion,
    },
    onSubmit: (vals) => {
      updateFormData({ ...values, ...vals });
      nextStep();
    },

    validationSchema: Yup.object({
      date: Yup.date().required("Please select a date"),
      time: Yup.string().required("Please select a time"),
      diners: Yup.string().required("Please select a number of diners"),
    }),
  });

  useEffect(() => {
    if (formik.values.date) {
      dispatch({ type: "dateChange", date: formik.values.date });
    }
    // eslint-disable-next-line
  }, [formik.values.date]);

  const handleSeating = (e) => {
    updateFormData({ ...values, seating: e.target.value });
  };

  return (
    <FormikProvider value={formik}>
      <Stack
        as={"form"}
        onSubmit={formik.handleSubmit}
        style={{ minHeight: "100%", gap: 0 }}
      >
        <Section bg={"primaryGreen.100"}>
          <Heading variant={"hero1"} alignSelf={"flex-start"}>
            Reservations
          </Heading>
          <RadioGroup defaultValue={values.seating}>
            <Grid
              padding="20px 0"
              gap="20px"
              templateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
              }}
            >
              <Radio colorScheme="white" value="1" onChange={handleSeating}>
                <Text textStyle="h3" color="highlight.100">
                  Indoor seating
                </Text>
              </Radio>
              <Radio colorScheme="white" value="2" onChange={handleSeating}>
                <Text textStyle="h3" color="highlight.100">
                  Outdoor seating
                </Text>
              </Radio>

              <FormControl
                isRequired
                isInvalid={!!formik.errors.date && formik.touched.date}
              >
                <FormLabel htmlFor="date">Date</FormLabel>
                <DatePicker
                  data-testid="date"
                  id="date"
                  name="date"
                  config={{ icon: FaCalendar }}
                  {...formik.getFieldProps("date")}
                >
                  Select Date
                </DatePicker>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={!!formik.errors.time && formik.touched.time}
              >
                <FormLabel htmlFor="time">Time</FormLabel>
                <ListBox
                  data-testid="time"
                  name="time"
                  id="time"
                  config={{
                    icon: FaClock,
                    double: true,
                    values: availableTimes,
                  }}
                  {...formik.getFieldProps("time")}
                >
                  Select Time
                </ListBox>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={!!formik.errors.diners && formik.touched.diners}
              >
                <FormLabel htmlFor="diners">Number of Diners</FormLabel>
                <ListBox
                  data-testid="diners"
                  name="diners"
                  id="diners"
                  config={{
                    icon: FaUser,
                    double: true,
                    values: Array(10)
                      .fill()
                      .map((x, i) => (i === 0 ? `1 Diner` : `${i + 1} Diners`)),
                  }}
                  {...formik.getFieldProps("diners")}
                >
                  No. of Diners
                </ListBox>
                <FormErrorMessage>{formik.errors.diners}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <ListBox
                  data-testid="occasion"
                  name="occasion"
                  id="occasion"
                  config={{
                    icon: FaChampagneGlasses,
                    double: false,
                    values: ["Birthday", "Engagement", "Anniversary"],
                  }}
                  {...formik.getFieldProps("occasion")}
                >
                  Occasion
                </ListBox>
              </FormControl>
            </Grid>
          </RadioGroup>
        </Section>
        <Pictures step={step}>
          <Button data-testid="submit" variant="primaryYellow" type="submit">
            Rerserve a Table
          </Button>
        </Pictures>
      </Stack>
    </FormikProvider>
  );
}

export default BookingFormStep0;
