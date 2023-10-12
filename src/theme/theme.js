import { extendTheme } from "@chakra-ui/react";
import { headingTheme } from "./headingTheme";
import { buttonTheme } from "./buttonTheme";
import { formLabelTheme } from "./formLabelTheme";
import { inputTheme } from "./inputTheme";
import { textareaTheme } from "./textareaTheme";
import { listTheme } from "./listTheme";

const theme = extendTheme({
  colors: {
    primaryGreen: {
      100: "#495e57",
      200: "#3E514A",
      300: "#354540",
    },

    primaryYellow: {
      100: "#F4CE14",
      200: "#EAC50B",
      300: "#D6B40A",
    },

    seconday: {
      100: "#EE9972",
      200: "#FBDABB",
    },

    highlight: {
      100: "#EDEFEE",
      200: "#E9ECEB",
      300: "#DFE2E0",
      900: "#333333",
    },
  },
  textStyles: {
    lead_text: {
      fontFamily: "Karla",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1,
    },
    section_title: {
      fontFamily: "Karla",
      fontSize: "18px",
      fontWeight: "extrabold'",
    }
  },
  components: {
    Input: inputTheme,
    Heading: headingTheme,
    FormLabel: formLabelTheme,
    Button: buttonTheme,
    Textarea: textareaTheme,
    List: listTheme,
  },
});

export default theme;
