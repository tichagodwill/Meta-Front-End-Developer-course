import { Stack, Flex, Box, Image } from "@chakra-ui/react";
import Section from "../Section";
import Hero from "./Hero";
import pic from "../../assets/800/restauranfood.jpg";
import lemon from "../../assets/lemon.svg";

function Lemon() {
  <img src={lemon} alt="" />;
}

function CallToAction() {
  const renderLemon = () => {
    const styles = { zIndex: 0, position: "absolute", height: "125px" };
    return (
      <>
        <Lemon></Lemon>
        <img
          alt=""
          src={lemon}
          style={{ ...styles, top: "90px", left: "20px", opacity: 0.15 }}
        ></img>
        <img
          alt=""
          src={lemon}
          style={{
            ...styles,
            top: "130px",
            left: "100px",
            rotate: "60deg",
            opacity: 0.1,
          }}
        ></img>
        <img
          alt=""
          src={lemon}
          style={{
            ...styles,
            top: "140px",
            right: "130px",
            rotate: "25deg",
            opacity: 0.1,
          }}
        ></img>
        <img
          alt=""
          src={lemon}
          style={{
            ...styles,
            top: "90px",
            right: "40px",
            rotate: "-32deg",
            opacity: 0.2,
          }}
        ></img>
      </>
    );
  };

  return (
    <Section
      id="call-to-action"
      bg="primaryGreen.100"
      renderbackground={renderLemon}
    >
      <Stack
        width="100%"
        justifyContent={"space-between"}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Hero j />

        <Flex flex={1} position={"relative"} w={"full"}>
          <Box
            right={"0"}
            position={{ base: "relative", md: "absolute" }}
            maxWidth={{ base: "100%", md: "280px" }}
            height={{ base: "300px", md: "350px" }}
            rounded={"16px"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              name="pict"
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={pic}
            />
          </Box>
        </Flex>
      </Stack>
    </Section>
  );
}

export default CallToAction;
