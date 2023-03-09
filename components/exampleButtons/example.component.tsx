import React from "react";
import { Button, Box, Flex } from "@chakra-ui/react";

export const Example = () => {
  return (
    <Flex direction="row" justify="center" alignContent="center"
    alignItems="center"
    p="10"
    ml="0px"
    mr="0px" >
      <Box>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
        <Button variant="highlight">Highlight</Button>
        <Button variant="highlightOutline">Highlight Outline</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="dangerOutline">Danger Outline</Button>
      </Box>
    </Flex>
  );
};
