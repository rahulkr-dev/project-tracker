import React from "react";
import { Flex,Image } from "@chakra-ui/react";
import dashboard from "../assets/Dashboard.svg";
import createProject from "../assets/create-project.svg";
import projectList from "../assets/Project-list.svg";

const MobileNavigation = () => {
  console.log("hi I am mobile screen");
  return (
    <Flex zIndex={2} display={"flex"} pos={"fixed"} bottom={0} bg="white" w="full" justifyContent={"space-around"} alignItems={"center"} p="1rem">
      <Image boxSize={"1.7rem"} src={dashboard} alt="dashboard image" />
      <Image
        boxSize={"1.7rem"}
        src={createProject}
        alt="create-project image"
      />
      <Image boxSize={"1.7rem"} src={projectList} alt="project list image" />
    </Flex>
  );
};

export default MobileNavigation;
