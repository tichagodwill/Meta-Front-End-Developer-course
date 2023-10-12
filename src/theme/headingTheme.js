import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const headingSection1 = defineStyle({
  color: "highlight.900",
  fontFamily: "Markazi Text",
  fontWeight: 500,
  fontSize: "64px",
  lineHeight: 0.8,
});

const headingSection2 = defineStyle({
  color: "highlight.900",
  fontFamily: "Markazi Text",
  fontWeight: 400,
  fontSize: "40px",
  lineHeight: 0.8,
});


const headingHero1 = defineStyle({
  color: "primaryYellow.100",
  fontFamily: "Markazi Text",
  fontWeight: 500,
  fontSize: "64px",
  lineHeight: 0.8,
});

const headingHero2 = defineStyle({
  color: "highlight.100",
  fontFamily: "Markazi Text",
  fontWeight: 400,
  fontSize: "40px",
  lineHeight: 0.8,
});

const headingFooter = defineStyle({
  color: "highlight.100",
  fontFamily: "Karla",
  fontWeight: "bold",
  fontSize: "20px",
});

const headingDish = defineStyle({
  color: "highlight.900",
  fontFamily: "Karla",
  fontWeight: "bold",
  fontSize: "20px",
});

const headingDishPrice = defineStyle({
  color: "seconday.100",
  fontFamily: "Karla",
  fontWeight: "bold",
  fontSize: "20px",
});

export const headingTheme = defineStyleConfig({
  variants: {
    section1: headingSection1,
    section2: headingSection2,
    hero1: headingHero1,
    hero2: headingHero2,
    dish: headingDish,
    dishPrice: headingDishPrice,
    footer: headingFooter,
  },
});
