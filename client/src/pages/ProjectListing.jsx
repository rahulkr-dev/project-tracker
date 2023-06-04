import React from "react";
import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import Header from "../components/Header";
import { SearchIcon } from "@chakra-ui/icons";
const ProjectListing = () => {
  return (
    <Box>
      <Header title={"DashBoard"} />
      <Box bg="white" boxShadow={"md"}>
        <InputGroup >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input  w="250px" placeholder="Search" type="search" variant={"flushed"} />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default ProjectListing;
