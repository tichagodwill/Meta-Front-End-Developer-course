import { Box, Center, Heading, Image, Text, Icon } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa6";

function Star(props) {
  return (
    <Icon
      as={props.on ? FaStar : FaRegStar}
      color={props.on ? "primaryYellow.100" : "Highlight.900"}
    />
  );
}

function Review(props) {
  return (
    <Box
      padding="20px 8px"
      bg="highlight.100"
      borderRadius={"16px"}
      boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.25)"}
    >
      <Box h="128px">
        <Center>
          <Image src={props.img} borderRadius={"full"} />
        </Center>
      </Box>
      <Heading variant="dish">{props.name}</Heading>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} on={props.note >= i} />
      ))}
      <Text margin="20px 8px">{props.description}</Text>
    </Box>
  );
}

export default Review;
