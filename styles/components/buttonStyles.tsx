import { whiten, darken, mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object base or defualt style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: () => ({
      bg: "primary.main",
      color: "white",
      fontWeight: "normal",
      m: 2,
      _hover: {
        bg: "primary.400",
        boxShadow: "md",
      },
    }),
    secondary: () => ({
      bg: "secondary.main",
      color: "white",
      fontWeight: "normal",
      m: 2,
      _hover: {
        bg: "secondary.400",
        boxShadow: "md",
      },
    }),
    secondaryOutline: () => ({
      bg: "transparent",
      border: "2px solid",
      borderColor: "secondary.main",
      color: "secondary.main",
      p: 5,
      fontWeight: "normal",
      m: 2,
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),
    highlight: () => ({
      bg: "highlight.main",
      color: "white",
      fontWeight: "normal",
      m: 2,
      _hover: {
        bg: "highlight.300",
        boxShadow: "md",
      },
    }),
    highlightOutline: () => ({
      bg: "transparent",
      border: "2px solid",
      borderColor: "highlight.500",
      color: "highlight.500",
      fontWeight: "normal",
      m: 2,
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),
    warning: () => ({
      bg: "warning.main",
      color: "white",
      fontWeight: "normal",
      m: 2,
      _hover: {
        bg: "warning.500",
        boxShadow: "md",
      },
    }),
    danger: () => ({
      bg: "danger.main",
      color: "white",
      fontWeight: "normal",
      m: 2,
      _hover: {
        bg: "danger.400",
        boxShadow: "md",
      },
    }),
    dangerOutline: () => ({
      bg: "transparent",
      border: "2px solid",
      borderColor: "danger.500",
      color: "danger.500",
      fontWeight: "normal",
      m: 2,
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),
  },
  // default values for size and variant
  defaultProps: {},
};
