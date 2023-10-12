import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  item: {
    fontFamily: "Karla",
    fontSize: "18px",
    fontWeight: 500,
    color: "highlight.100",
  },
});

export const listTheme = defineMultiStyleConfig({
  baseStyle,
});
