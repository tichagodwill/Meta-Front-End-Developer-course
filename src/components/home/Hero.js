import { Stack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Stack
      maxWidth="65ch"
      flex={1}
      spacing={{
        base: 5,
        md: 10,
      }}
    >
      <Stack spacing={0}>
        <Heading variant={"hero1"}>Little Lemon</Heading>
        <Heading variant={"hero2"}>Chicago</Heading>
      </Stack>
      <Text textStyle={"lead_text"} color="highlight.100">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with modern twist.
      </Text>
      <Stack
        spacing={{ base: 4, sm: 6 }}
        direction={{ base: "column", sm: "row" }}
      >
        <Link to="/Reservations">
          <Button variant="primaryYellow">Reserve a Table</Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Hero;
