import { Flex, Spacer, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Section from "../Section";
import Dish from "./Dish";
import { bruchetta, greekSalad, lemonDessert } from "../PictureBank";

const Dishes = [
  {
    name: "Bruschetta",
    price: "$5.99",
    img: bruchetta,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
  },
  {
    name: "Greek Salad",
    price: "$12.99",
    img: greekSalad,
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
  },
  {
    name: "Lemon Cake",
    price: "$5.00",
    img: lemonDessert,
    description:
      "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <Section id="specials" bg="white" margin="40px 0">
      <Flex direction="row" width="100%">
        <Heading variant="section1">This week specials!</Heading>
        <Spacer />
        <Link to="/Menu">
          <Button variant="primaryYellow">Online Menu</Button>
        </Link>
      </Flex>
      <SimpleGrid
        margin="40px 0"
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {Dishes.map((dish) => (
          <Dish key={dish.name} {...dish} />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Specials;
