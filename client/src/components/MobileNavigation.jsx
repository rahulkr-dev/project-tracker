import React from "react";
import { Center, Flex, Image } from "@chakra-ui/react";
import dashboard from "../assets/Dashboard.svg";
import createProject from "../assets/create-project.svg";
import projectList from "../assets/Project-list.svg";
import dashboardActive from "../assets/Dashboard-active.svg";
import createProjectActive from "../assets/create-project-active.svg";
import projectListActive from "../assets/Project-list-active.svg";

import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
  // console.log("hi I am mobile screen");
  const { pathname } = useLocation();

  return (
    <Flex
      borderRadius={"1rem"}
      boxShadow={"md"}
      zIndex={2}
      display={"flex"}
      pos={"fixed"}
      bottom={0}
      bg="white"
      w="full"
      justifyContent={"space-around"}
      alignItems={"center"}
      p="1rem"
    >
      <Link to="/">
        <Center
          borderBottom={pathname == "/" ? "5px solid blue" : null}
          p="10px"
        >
          <Image
            boxSize={"1.7rem"}
            src={pathname == "/" ? dashboardActive : dashboard}
            alt="dashboard image"
          />
        </Center>
      </Link>
      <Link to="/create-project">
        <Center
          borderBottom={pathname == "/create-project" ? "5px solid blue" : null}
          p="10px"
        >
          <Image
            boxSize={"1.7rem"}
            src={
              pathname == "/create-project"
                ? createProjectActive
                : createProject
            }
            alt="create-project image"
          />
        </Center>
      </Link>
      <Link to="/project-list">
        <Center
          borderBottom={pathname == "/project-list" ? "5px solid blue" : null}
          p="10px"
        >
          <Image
            boxSize={"1.7rem"}
            src={pathname == "/project-list" ? projectListActive : projectList}
            alt="project list image"
          />
        </Center>
      </Link>
    </Flex>
  );
};

export default MobileNavigation;
