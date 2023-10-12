import { defineStyleConfig } from "@chakra-ui/react";

export const textareaTheme = defineStyleConfig({
  variants: {
    filled: {
      fontFamily: "Karla",
      fontSize: "18px",
      fontWeight: 500,
      borderRadius: "16px",
      color: "highlight.900",
      background: "highlight.100",
      _hover: {
        background: "highlight.100",
      },
      _focusVisible: {
        background: "highlight.100",
        borderColor: "highlight.300",
      },
    },
  },
  defaultProps: {
    variant: "filled",
  },
});
