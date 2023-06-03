import React,{useEffect} from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountDocument,
  getDepartmentStatus,
} from "../store/dashboard/dashboard.slice";
const data = [
  { name: "total project", value: 7 },
  { name: "closed", value: 3 },
  { name: "running", value: 5 },
  { name: "Delayed", value: 3 },
];
const DashboardStatusBox = ({ title, value }) => {
  const { loading, error } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountDocument());
    dispatch(getDepartmentStatus());
  }, []);
  return (
    <Box borderLeft={"5px solid skyblue"} w="14rem" bg="white" p="1rem">
      <Text>{title}</Text>
      <Text fontWeight={"bold"} fontSize={"1.5rem"}>
        {value}
      </Text>
    </Box>
  );
};
const Dashboard = () => {
  return (
    <Box>
      <Header title={"DashBoard"} />
      <Box
        p="15px"
        w="97%"
        m="auto"
        boxShadow={"lg"}
        borderRadius={".7rem"}
        pos="relative"
        top={["5rem", "5rem", "-3.5rem", "-3.5rem"]}
      >
        <Flex gap="1rem" overflowX={["scroll", "scroll", "scroll", "hidden"]}>
          {data.map((item, _i) => (
            <DashboardStatusBox key={_i} title={item.name} value={item.value} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Dashboard;
