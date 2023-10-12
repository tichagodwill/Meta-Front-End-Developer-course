import { Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../Section";
import Review from "./Review";

import user0 from "../../assets/users/20.jpg";
import user1 from "../../assets/users/30.jpg";
import user2 from "../../assets/users/50.jpg";
import user3 from "../../assets/users/68.jpg";

const Reviews = [
  { name: "Paul", img: user0, note: 5, description: "Excellent food. Menu is extensive and seasonal to a particularly high standard." },
  { name: "Dylan", img: user1, note: 4, description: "It’s a great experience. The ambiance is very welcoming and charming." },
  { name: "Andrea", img: user2, note: 5, description: "This cozy restaurant has left the best impressions!" },
  { name: "Maria", img: user3, note: 1, description: "I’m confident the food here poisoned me." },
];
function Testimonials() {
  return (
    <Section id="testimonials" bg="primaryGreen.100" margin="40px 0">
      <Heading variant="hero1" alignSelf="flex-start">
        Testimonials
      </Heading>
      <SimpleGrid
        width="100%"
        margin="40px 0"
        gridGap={8}
        templateColumns="repeat(auto-fit, minmax(170px,1fr))"
      >
        {Reviews.map((review) => (
          <Review key={review.name} {...review} />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Testimonials;
