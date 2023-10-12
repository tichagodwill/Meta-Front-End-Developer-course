import { Link } from "react-router-dom";
import { Heading, Button, Text, Stack } from "@chakra-ui/react";
import Section from "../Section";
import Pictures from "./Pictures";

function BookingFormStep2({ step, values }) {
  return (
    <Stack style={{ minHeight: "100%", gap: 0 }}>
      <Section bg={"primaryGreen.100"}>
        <Heading variant={"hero1"} alignSelf={"flex-start"}>
          Confirmation
        </Heading>
        <Stack spacing={8} padding={8}>
          <Heading variant={"hero2"}>Thank you {values.firstName} !</Heading>
          <Text textStyle={"lead_text"} color="highlight.100">
            We look forward to seeing you on {values.date.toLocaleDateString()}{" "}
            at {values.time}.
          </Text>
          <Text textStyle={"lead_text"} color="highlight.100">
            You have reserved a table for {values.diners}{" "}
            {values.seating === "1" ? "inside" : "outside"}.
          </Text>
          <Text textStyle={"lead_text"} color="highlight.100">
            You will receive a confirmation e-mail at {values.email}.
          </Text>
        </Stack>
      </Section>
      <Pictures step={step}>
        <Link to="/Home">
          <Button variant="primaryYellow" width="100%">
            Home
          </Button>
        </Link>
      </Pictures>
    </Stack>
  );
}

export default BookingFormStep2;
