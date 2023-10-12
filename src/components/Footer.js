import { Link } from "react-router-dom";
import {
  Heading,
  VStack,
  Image,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import logo from "../assets/Asset 20@4x.svg";
import Section from "./Section";

const Links = ["Home", "About", "Menu", "Reservations", "Order", "Login"];

const ListHeading = ({ children }) => (
  <Heading variant={"footer"} noOfLines={1}>
    {children}
  </Heading>
);

function Footer() {
  return (
    <Section as={"footer"} bg="primaryGreen.100">
      <SimpleGrid
        width={"100%"}
        templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
        spacing={{ base: 8, md: 0 }}
      >
        <Image
          src={logo}
          alt="Little Lemon Logo"
          minWidth={"100px"}
          width={"100px"}
        ></Image>
        <VStack as="nav" align={"flex-start"}>
          <ListHeading>NAVIGATION</ListHeading>
          <List>
            {Links.map((link) => (
              <ListItem key={link}>
                <Link to={link}>{link}</Link>
              </ListItem>
            ))}
          </List>
        </VStack>
        <VStack align={"flex-start"}>
          <ListHeading>CONTACT</ListHeading>
          <List>
            <ListItem>
              <Link>Address</Link>
            </ListItem>
            <ListItem>
              <Link>Phone Number</Link>
            </ListItem>
            <ListItem>
              <Link>email</Link>
            </ListItem>
          </List>
        </VStack>
        <VStack align={"flex-start"}>
          <ListHeading>SOCIAL MEDIA</ListHeading>
          <List>
            <ListItem>
              <Link>
                <ListIcon as={FaFacebook} />
                Facebook
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                <ListIcon as={FaInstagram} />
                Instagram
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                <ListIcon as={FaLinkedin} />
                LinkedIn
              </Link>
            </ListItem>
          </List>
        </VStack>
      </SimpleGrid>
    </Section>
  );
}

export default Footer;
