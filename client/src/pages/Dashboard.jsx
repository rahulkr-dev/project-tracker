import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
5;
const data = [
  { name: "total project", value: 7 },
  { name: "closed", value: 3 },
  { name: "running", value: 5 },
  { name: "Delayed", value: 3 },
];
const DashboardStatusBox = ({ title, value }) => {
  return (
    <Box w="14rem" bg="white" p="1rem">
      <Text>{title}</Text>
      <Text fontWeight={"bold"} fontSize={"1.5rem"}>
        {value}
      </Text>
    </Box>
  );
};
const Dashboard = () => {
  return (
    <Box >
      <Header title={"DashBoard"} />
      <Box
        p="15px"
        w="97%"
        m="auto"
        boxShadow={"lg"}
        borderRadius={".7rem"}
        pos="relative"
        top={["5rem","5rem","-3.5rem","-3.5rem"]}
      >
        <Flex gap="1rem" overflowX={["scroll","scroll","hidden","hidden"]}>
          {data.map((item) => (
            <DashboardStatusBox title={item.name} value={item.value} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;
