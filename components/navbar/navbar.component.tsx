import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    Stack,
    useBreakpointValue,
    useColorModeValue,
    useTheme,
    useColorMode,
  } from "@chakra-ui/react";
  import * as React from "react";
  import { useState } from "react";
  import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
  //   import { IoSunny, IoMoon } from 'react-icons/io5';
  //   import { Logo } from '../logo';
  // import { Link } from "react-scroll";
  import Link from "next/link";
  
  const MenuToggle = ({
    toggle,
    isOpen,
  }: {
    toggle: () => void;
    isOpen: boolean;
  }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? (
          <IconButton
            variant="ghost"
            icon={<CloseIcon fontSize="1.25rem" />}
            aria-label="Open Menu"
            color="warning.main"
            _hover={{ color: "secondary.main" }}
          />
        ) : (
          <IconButton
            variant="ghost"
            icon={<HamburgerIcon fontSize="1.25rem" />}
            aria-label="Open Menu"
            color="warning.main"
            _hover={{ color: "secondary.main" }}
          />
        )}
      </Box>
    );
  };
  
  export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const theme = useTheme();
    const isDesktop = useBreakpointValue({ base: false, lg: true });
  
    // This is where we'll set the theme color for dark and light mode once we have a dark theme
    const { toggleColorMode } = useColorMode();
    const [toggleColor, setToggleColor] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return (
      <>
        {isDesktop ? (
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["transparent", "transparent", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
          >
            {/*
          TODO: Add graphic or logo here 
          */}
            {/* <Logo /> */}
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box bg="primary.main" borderRadius="10" w="100px" h="100px"></Box>
              <Link href="learnMore">
                <Button
                  color="warning.600"
                  bgColor="#EAEAEA"
                  width="100%"
                  _hover={{ color: "secondary.main" }}
                  textDecoration="underline"
                  textDecorationThickness="3px"
                  textDecorationColor="secondary.main"
                  textUnderlineOffset="6px"
                >
                 Home
                </Button>
              </Link>
            </Box>
            {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
            <Box
              display={{ base: "none", md: "block" }}
              flexBasis={{ base: "100%", md: "auto" }}
            >
              <Stack
                spacing={8}
                align="center"
                display="flex"
                justifyContent={[
                  "center",
                  "space-around",
                  "flex-end",
                  "flex-end",
                ]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
              >
                <ButtonGroup
                  display={"flex"}
                  flexDirection={["column", "row"]}
                  variant="ghost"
                  spacing={[0, 1, 1, 1]}
                >
                  <Link href="orgs">
                    <Button
                      color="warning.600"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      About
                    </Button>
                  </Link>
                  <Link href="events">
                    <Button
                      color="warning.600"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      Projects
                    </Button>
                  </Link>
                  <Link href="signup">
                    <Button
                      color="primary.main"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      Contact
                    </Button>
                  </Link>
                  {/* TODO: Add color mode toggle here */}
                  {/* <Flex direction="row" align="center">
                  <Box
                    cursor={"pointer"}
                    // w={8}
                    // h={8}
                    color="primary.100"
                    borderRadius="20%"
                    p={1}
                    border={"2px solid"}
                    onClick={() => {
                      toggleColorMode();
                      setToggleColor(!toggleColor);
                    }}
                  >
                    {toggleColor ? <IoMoon /> : <IoSunny />}
                  </Box>
                </Flex> */}
                </ButtonGroup>
              </Stack>
            </Box>
          </Flex>
        ) : (
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["transparent", "transparent", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
          >
            {/*
          TODO: Add graphic or logo here 
          */}
            {/* <Logo /> */}
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Box bg="primary.main" borderRadius="10" w="100px" h="100px"></Box>
            </Box>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <Box
              display={{ base: isOpen ? "block" : "none", md: "block" }}
              flexBasis={{ base: "100%", md: "auto" }}
            >
              <Stack
                spacing={8}
                align="center"
                display="flex"
                justifyContent={[
                  "center",
                  "space-around",
                  "flex-end",
                  "flex-end",
                ]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
              >
                <ButtonGroup
                  display={"flex"}
                  flexDirection={["column", "row"]}
                  variant="ghost"
                  spacing={[0, 1, 1, 1]}
                >
                  <Link href="learnMore">
                    <Button
                      color="warning.600"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      Home
                    </Button>
                  </Link>
                  <Link href="orgs">
                    <Button
                      color="warning.600"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      About
                    </Button>
                  </Link>
                  <Link href="events">
                    <Button
                      color="warning.600"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      Projects
                    </Button>
                  </Link>
                  <Link href="signup">
                    <Button
                      color="primary.main"
                      width="100%"
                      _hover={{ color: "secondary.main" }}
                    >
                      Contact
                    </Button>
                  </Link>
                  {/* TODO: Add color mode toggle here */}
                  {/* <Flex direction="row" align="center">
                  <Box
                    cursor={"pointer"}
                    // w={8}
                    // h={8}
                    color="primary.100"
                    borderRadius="20%"
                    p={1}
                    border={"2px solid"}
                    onClick={() => {
                      toggleColorMode();
                      setToggleColor(!toggleColor);
                    }}
                  >
                    {toggleColor ? <IoMoon /> : <IoSunny />}
                  </Box>
                </Flex> */}
                </ButtonGroup>
              </Stack>
            </Box>
          </Flex>
        )}
      </>
    );
  };
  