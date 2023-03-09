import {
  Box,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Icon,
  Flex,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TiHeart } from "react-icons/ti";
import { FaRegCopyright } from "react-icons/fa";
import styles from "../../styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

import packageJson from "../../package.json";

//   import PingLogo from "../../assets/pingLogo-transparent.png";

export const Footer = () => (
  <Box bg="warning.main" maxWidth="100%">
    <Container
      as="footer"
      role="contentinfo"
      p="10"
      py={{ base: "12", md: "16" }}
      maxW={{ base: "xl", md: "7xl" }}
      px={{ base: "6", md: "8" }}
      mx="auto"
    >
      <Stack spacing={{ base: "4", md: "5" }} justify="space-between">
        <Stack
          justify="space-between"
          direction={["column", "row"]}
          align="center"
        >
          <Box>
            <Flex
              fontSize="small"
              direction="row"
              align="center"
              justify="center"
              color="white"
            >
              {/*
                  TODO: Add RAA logo and links when they are ready
              */}
              <Box
                bg="#dc3545"
                mt="10px"
                borderRadius="10"
                w="100px"
                h="100px"
              ></Box>
              {/* <Image src={PingLogo} alt="Ping Software USA logo" /> */}
            </Flex>
            <Text pt="10px" fontSize="small" color="#FFFFFF">
              {new Date().getFullYear()} RAA-Live v{packageJson.version}
            </Text>
          </Box>
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="https://www.facebook.com/daniel.atochejuarez/"
              aria-label="Facebook"
              color="#FFFFFF"
              target="_blank"
              _hover={{ color: "highlight.main" }}
              icon={<FaFacebook fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/datoche-juarez"
              aria-label="GitHub"
              color="#FFFFFF"
              target="_blank"
              _hover={{ color: "highlight.main" }}
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
              aria-label="LinkedIn"
              color="#FFFFFF"
              target="_blank"
              _hover={{ color: "highlight.main" }}
              icon={<FaLinkedin fontSize="1.25rem" />}
              mb="8px"
            />
          </ButtonGroup>
        </Stack>
        <Flex direction="row" justify={["center", "end"]}>
          <Box fontSize="small" color="#FFFFFF">
            <Flex direction="row" justify="center">
              <Icon as={FaRegCopyright} alignSelf="center" /> {""}
              <Text px="3px" alignSelf="center">
                Daniel Atoche-Juarez
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Container>
  </Box>
);
