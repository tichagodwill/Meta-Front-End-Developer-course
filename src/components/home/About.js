import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import Section from "../Section";
import { marioAdrian1, marioAdrian2 } from "../PictureBank";
function About() {
  return (
    <Section id="about" bg="white" margin="40px 0" height="460px">
      <SimpleGrid templateColumns={{ base: "1fr", md: "1fr 1fr" }} spacing={8}>
        <Stack spacing={8}>
          <Stack spacing={0} alignSelf={"flex-start"}>
            <Heading variant={"section1"}>Little Lemon</Heading>
            <Heading variant={"section2"}>Chicago</Heading>
          </Stack>
          <Text textStyle={"lead_text"} color="highlight.900">
            Little Lemon is owned by two Italian brothers, Mario and
            Adrian, who moved to the United States to pursue their shared dream
            of owning a restaurant. To craft the menu, Mario relies on family
            recipes and his experience as a chef in Italy. Adrian does all the
            marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the
            Mediterranean region.
          </Text>
        </Stack>

        <Flex position={"relative"} gap={{ base: 8, md: 0 }}>
          <Box
            right={"0px"}
            top={"0px"}
            position={{ base: "relative", md: "absolute" }}
            maxWidth={{ base: "100%", md: "65%" }}
            height={{ base: "100%", md: "350px" }}
            rounded={"16px"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Mario And Adrian"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={marioAdrian1}
            />
          </Box>
          <Box
            left={"0px"}
            top={{ base: "0px", md: "50px" }}
            position={{ base: "relative", md: "absolute" }}
            maxWidth={{ base: "100%", md: "70%" }}
            height={{ base: "100%", md: "350px" }}
            rounded={"16px"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              name="pict"
              alt={"Mario And Adrian"}
              fit={"cover"}
              align={"right"}
              w={"100%"}
              h={"100%"}
              src={marioAdrian2}
            />
          </Box>
        </Flex>
      </SimpleGrid>
    </Section>
  );
}

export default About;
