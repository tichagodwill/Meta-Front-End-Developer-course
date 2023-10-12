import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  field: {
    fontFamily: "Karla",
    fontSize: "18px",
    fontWeight: 500,
    color: "highlight.900",
  },
});

const variantFilled = definePartsStyle((props) => {
  return {
    field: {
      borderRadius: "16px",
      background: "highlight.100",
      _hover: {
        background: "highlight.100",
      },
      _focusVisible: {
        background: "highlight.100",
        borderColor: "highlight.300",
      },
    },
  };
});

const variants = {
  filled: variantFilled,
};

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "filled",
  },
});
