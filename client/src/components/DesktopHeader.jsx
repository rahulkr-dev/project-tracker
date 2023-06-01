import React from "react";
import { Box, Text, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import bgImage from "../assets/Header-bg.svg";
import logout from "../assets/logout.svg";

const DesktopHeader = ({ title }) => {
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 767px)",
    "(min-width: 768px)",
  ]);

  return (
    <>
      {isDesktop && (
        <Box
          bgImage={bgImage}
          bgRepeat={"no-repeat"}
          bgSize={"contain"}
          h="10rem"
          w="100%"
          p="3rem"
        >
          <Text fontSize={"1.5rem"} color="white">
            {title}
          </Text>
        </Box>
      )}

      {isMobile && (
        <Flex
          bgImage={bgImage}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          w="100%"
        //   p="2rem"
          justifyContent={"space-around"}
          pos={"fixed"}
          top={0}
          left={0}
          zIndex={2}
          p="1rem 0"
        >
          <Text fontSize={"1.2rem"} color="white">
            {title}
          </Text>
          <Image boxSize={"1.5rem"} src={logout} />
        </Flex>
      )}
    </>
  );
};

export default DesktopHeader;
