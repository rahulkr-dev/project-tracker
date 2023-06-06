import React, { useEffect } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountDocument,
  getDepartmentStatus,
} from "../store/dashboard/dashboard.slice";
import DepartmentChart from "../components/DepartmentalChart";

const DashboardStatusBox = ({ title, value }) => {
  return (
    <Box
      borderRadius={".8rem"}
      borderLeft={"6px solid skyblue"}
      w="14rem"
      bg="white"
      p=".7rem 1rem"
      boxShadow={"md"}
    >
      <Text fontWeight={"medium"} color="gray.500">
        {title.replace("_", " ")}
      </Text>
      <Text fontWeight={"bold"} fontSize={"2rem"}>
        {value}
      </Text>
    </Box>
  );
};

const Dashboard = () => {
  const { loading, error, documentCount, departmentWiseStatus } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountDocument());
    dispatch(getDepartmentStatus());
  }, []);
  return (
    <Box bg="gray.100">
      <Header title={"Dashboard"} />
      <Box
        // border={"1px solid yellow"}
        p="15px"
        w="97%"
        m="auto"
        // boxShadow={"lg"}
        borderRadius={".7rem"}
        pos="relative"
        top={["5rem", "5rem", "-3.5rem", "-3.5rem"]}
      >
        <Flex 
        // border="1px solid green"
        gap="1rem" overflowX={{base:"scroll",lg:"scroll"}}>
          {documentCount.map((item, _i) => (
            <DashboardStatusBox
              key={_i}
              title={item.title}
              value={item.value}
            />
          ))}
        </Flex>
      </Box>
      {/* Chart */}
      <Text
        mt={{base:"6rem",md:"inherit"}}
        ml="1.3rem"
        mb="1rem"
        fontWeight={{base:"bold",md:"normal"}}
        fontSize={{base:".9rem",md:"1.3rem"}}
        fontFamily={"mono"}
      >
        Department wise - Total Vs Closed
      </Text>
      <Box
        mb="3rem"
        borderRadius={"1rem"}
        ml="1.2rem"
        bg="white"
        boxShadow={"lg"}
        p="1rem"
        w={{ base: "90%", md: "45%" }}
      >
        {departmentWiseStatus.length > 0 && (
          <DepartmentChart data={departmentWiseStatus} />
        )}
        {loading && <Spinner />}
      </Box>
    </Box>
  );
};

export default Dashboard;
