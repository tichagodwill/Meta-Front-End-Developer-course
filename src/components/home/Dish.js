import { Flex, Spacer, Box, Heading, Image, Text } from "@chakra-ui/react";

function Dish(props) {
  return (
    <Box
      bg="highlight.100"
      borderRadius={"16px"}
      boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.25)"}
    >
      <Box h="160px" overflow="hidden">
        <Image src={props.img} borderRadius={"16px 16px 0 0"} className="dish" alt={`photo of ${props.name}`}/>
      </Box>
      <Flex margin="20px 8px">
        <Heading variant="dish">{props.name}</Heading>
        <Spacer />
        <Heading variant="dishPrice">{props.price}</Heading>
      </Flex>
      <Text margin="20px 8px">{props.description}</Text>
    </Box>
  );
}

export default Dish;
