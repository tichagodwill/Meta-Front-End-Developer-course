import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
  variants: {
    primaryYellow: {
      fontFamily: "Karla",
      fontSize: "18px",
      fontWeight: 600,
      borderRadius: "16px",
      bg: "primaryYellow.100",
      _hover: { bg: "primaryYellow.200" },
      _active: { bg: "primaryYellow.300" },
    },
    primaryGreen: {
      fontFamily: "Karla",
      fontSize: "33px",
      lineHeight: "39px",
      fontStyle: "normal",
      fontWeight: 800,
      bg: "highlight.100",
      color: "primaryGreen.100",
    },
  },
});
