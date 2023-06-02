import React from "react";
import { Box, Text, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import bgImage from "../assets/Header-bg.svg";
import logout from "../assets/logout.svg";
import logo from "../assets/Logo.svg";
const Login = () => {
  return (
    <Box>
      <Image
        border={"1px solid black"}
        src={bgImage}
        w="100vw"
        // h={["50vh", "50vh", "70vh", "70vh"]}
        height="60vh"
        alt="background image"
      />
      <Flex w="full" flexDirection={"column"} alignItems={"center"}>
        <Image boxSize={"3.3rem"} src={logo} alt="logo" />
        <Text>Online project management</Text>
      </Flex>
    </Box>
  );
};

export default Login;
