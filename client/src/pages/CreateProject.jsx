import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  Select,
  Textarea,
  Flex,
  Text
} from "@chakra-ui/react";
import Header from "../components/Header";
const textAreaInfo = [
  {
    name: "Reason",
    option: ["For Business"],
  },
  {
    name: "Type",
    option: ["Internal","External"],
  },
  {
    name: "Division",
    option: ["Filters"],
  },
  {
    name: "Category",
    option: ["Quality A"],
  },
  {
    name: "Priority",
    option: ["High"],
  },
  {
    name: "Department",
    option: ["Strategy"],
  },
];
const CreateProject = () => {
  return (
    <Box bg="gray.200">
      <Header title={"Create Project"} />
      <Box
        bg="white"
        p="15px"
        w="97%"
        m="auto"
        boxShadow={"lg"}
        borderRadius={".7rem"}
        pos="relative"
        top="-3.5rem"
      >
        <Flex justifyContent={"space-between"} mt=".5rem" mb="3rem">
          <Textarea fontSize={"15px"} variant={"unstyled"} border={"1px solid gray"} p="10px 15px" color="gray.500" w="62%">Enter your Theme</Textarea>
          <Button color="white" borderRadius={"1rem"} variant={"unstyled"} bg="blue.600" p="6px 25px">Save Project</Button>
        </Flex>

        <Grid
          gap="1rem"
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        >
          {textAreaInfo.map((item, _i) => (
            <Box key={_i}>
              <FormLabel color="gray" fontSize={".9rem"}>{item.name}</FormLabel>
              <select className="custom-select" >
                {item.option.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </Box>
          ))}
          {/* Calendar */}
          <Box>
          <FormLabel color="gray" fontSize={".9rem"}>Start date as per Project Plan</FormLabel>
          <input type="date" class="custom-calendar" />

          </Box>
          <Box>
          <FormLabel color="gray" fontSize={".9rem"}>End date as per Project Plan</FormLabel>
          <input type="date" class="custom-calendar" />

          </Box>

        <Box>
          <FormLabel color="gray" fontSize={".9rem"}>Location</FormLabel>
          <select className="custom-select" >
            <option value="delhi">Delhi</option>
            <option value="goa">Goa</option>
            <option value="pune">Pune</option>
          </select>
        </Box>

        </Grid>
        <Flex mt="2rem" w="88%" justifyContent={"flex-end"}>
          status: <Text fontWeight={"bold"} color="black" as="span">Registered</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreateProject;
