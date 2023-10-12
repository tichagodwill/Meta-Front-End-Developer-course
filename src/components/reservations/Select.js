import { Button, Icon } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

function Select({ config, ...props }) {
  function handleClick() {
    if (config.onClick !== undefined) config.onClick();
  }

  return (
    <Button
      {...props}
      role="select"
      onClick={handleClick}
      variant={"primaryGreen"}
      iconSpacing={"auto"}
      width={{ base: "300px", sm: "400px" }}
      height={{ base: "40px", sm: "80px" }}
      boxShadow={"0px 4px 4px 0px rgba(0,0,0,0.25)"}
      borderRadius={"16px"}
      color={config.selected ? "highlight.100" : "primaryGreen.100"}
      bg={config.selected ? "primaryGreen.100" : "highlight.100"}
      _hover={
        config.selected
          ? {
              bg: "primaryGreen.200",
            }
          : {
              bg: "highlight.200",
            }
      }
      _active={
        config.selected
          ? {
              bg: "primaryGreen.300",
            }
          : {
              bg: "highlight.300",
            }
      }
      leftIcon={
        <Icon
          as={config.icon}
          boxSize={{ base: 6, sm: 10 }}
          opacity={config.selected ? 0 : 1}
        />
      }
      rightIcon={
        <Icon
          as={config.selected ? FaChevronUp : FaChevronDown}
          boxSize={{ base: 6, sm: 10 }}
        />
      }
    >
      {props.children}
    </Button>
  );
}

export default Select;
