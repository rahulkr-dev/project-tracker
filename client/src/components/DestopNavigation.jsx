import React from "react";
import { Box, Image, Flex, Center, VStack } from "@chakra-ui/react";
import dashboard from "../assets/Dashboard.svg";
import dashboardActive from "../assets/Dashboard-active.svg";
import createProject from "../assets/create-project.svg";
import createProjectActive from "../assets/create-project-active.svg";
import projectList from "../assets/Project-list.svg";
import projectListActive from "../assets/Project-list-active.svg";
import logout from "../assets/Logout.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const navList = [
  {
    src: dashboard,
    alt: "Dashboard Image",
    link: "/",
    active: dashboardActive,
  },
  {
    src: projectList,
    alt: "Project list Image",
    link: "/project-list",
    active: projectListActive,
  },
  {
    src: createProject,
    alt: "Create project list",
    link: "/create-project",
    active: createProjectActive,
  },
];

const DestopNavigation = () => {
  const { pathname } = useLocation();
  // console.log(pathname)

  // console.log("hi I am destop");
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
        <Link to="/">
          <Image
            boxSize={"1.7rem"}
            src={pathname == "/" ? dashboardActive : dashboard}
            alt="dashboard image"
          />
        </Link>
        <Link to="/project-list">
          <Image
            boxSize={"1.7rem"}
            src={pathname == "/project-list" ? projectListActive : projectList}
            alt="project list image"
          />
        </Link>
        <Link to="/create-project">
          <Image
            boxSize={"1.7rem"}
            src={
              pathname == "/create-project"
                ? createProjectActive
                : createProject
            }
            alt="create-project image"
          />
        </Link>
      </Flex>
      <Flex h="20%">
        <Link to="/login">
          <Image boxSize={"1.7rem"} src={logout} alt="logout image" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default DestopNavigation;
