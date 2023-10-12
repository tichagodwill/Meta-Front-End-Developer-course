import { Box, Container } from "@chakra-ui/react";

function Section(props) {
  const { id, as, vcenter, nopadding, renderbackground, ...rest } = props;
  const Type = as !== undefined ? as : "section";
  const style =
    vcenter === true
      ? {
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
        }
      : {};

  return (
    <Type id={id} style={style}>
      {renderbackground !== undefined && renderbackground()}
      <Box {...rest} width="100%" padding={nopadding === true ? "0px" : "20px"}>
        <Container
          name="fluidcontainer"
          maxW={{
            base: "90%",
            // md: "85%",
            lg: "820px",
          }}
          centerContent
        >
          {props.children}
        </Container>
      </Box>
    </Type>
  );
}

export default Section;
