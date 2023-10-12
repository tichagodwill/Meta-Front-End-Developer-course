import { useState, useEffect } from "react";
import Section from "../Section";
import { Stack, HStack, Image, Icon } from "@chakra-ui/react";
import pictureBank from "../PictureBank";

function Dot({ selected }) {
  return (
    <Icon boxSize={"20px"} viewBox="0 0 100 100" color="highlight.300">
      <circle cx="50" cy="50" r="50" fill="currentColor" />
      {selected && <circle cx="50" cy="50" r="25" fill="#000" opacity={0.5} />}
    </Icon>
  );
}

function Picture(props) {
  const pic = pictureBank[props.index];
  return (
    <Image
      src={pic}
      boxSize={{ base: "50px", sm: "75px", md: "150px" }}
      objectFit="cover"
      borderRadius={"16px"}
      boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.25)"}
    ></Image>
  );
}

function Pictures({ step, children }) {
  const [indices, setIndices] = useState([0, 1, 2]);

  useEffect(() => {
    const tmp = new Set();
    while (tmp.size !== 3) {
      tmp.add(Math.floor(Math.random() * pictureBank.length));
    }
    setIndices(Array.from(tmp));
  }, []);

  return (
    <Section bg="white" vcenter={true}>
      <Stack direction="column" gap="20px">
        <Stack
          direction="row"
          spacing={"20px"}
          width={"100px"}
          alignSelf="center"
        >
          {[0, 1, 2].map((i) => (
            <Dot key={i} selected={i === step} />
          ))}
        </Stack>
        <HStack spacing={"20px"}>
          {indices.map((id) => (
            <Picture key={id} index={id} />
          ))}
        </HStack>
        {children}
      </Stack>
    </Section>
  );
}

export default Pictures;
