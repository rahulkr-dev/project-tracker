import React from "react";
import { Box, Image, Flex, Center, VStack } from "@chakra-ui/react";
import dashboard from "../assets/Dashboard.svg";
import createProject from "../assets/create-project.svg";
import projectList from "../assets/Project-list.svg";
import logout from "../assets/Logout.svg";
const DestopNavigation = () => {
  console.log("hi I am destop");
  return (
    <Flex
    p={"1rem"}
      pos={"fixed"}
      top={0}
      left={0}
      height={"100vh"}
      direction={"column"}
      justifyContent={"center"}
      zIndex={2}
      bg="white"
    >
      <Flex justifyContent={"center"} direction={"column"} gap="2rem" h="80%">
        <Image boxSize={"1.7rem"} src={dashboard} alt="dashboard image" />
        <Image boxSize={"1.7rem"} src={projectList} alt="project list image" />
        <Image
          boxSize={"1.7rem"}
          src={createProject}
          alt="create-project image"
        />
      </Flex>
      <Flex h="20%">
        <Image boxSize={"1.7rem"} src={logout} alt="logout image" />
      </Flex>
    </Flex>
  );
};

export default DestopNavigation;
