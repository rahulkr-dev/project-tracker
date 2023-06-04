import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProjectByUser } from "../store/project/project.slice";
import StatusButton from "../components/StatusButton";

const tableHeading = [
  "Project Name",
  "Reason",
  "Type",
  "Division",
  "Category",
  "Priority",
  "Dept.",
  "Location",
  "Status",
];
const ProjectListing = () => {
  const { loading, error, projectList } = useSelector((store) => store.project);
  const dispatch = useDispatch();
  // console.log(projectList)

  const dateFormatter = (dateFromDb) => {
    const date = new Date(dateFromDb);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    dispatch(getProjectByUser({ limit: 10, page: 1 }));
  }, []);
  return (
    <Box>
      <Header title={"DashBoard"} />
      {/* Search and Sort */}
      <Flex justifyContent={"space-between"} bg="white" boxShadow={"md"}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            w="250px"
            placeholder="Search"
            type="search"
            variant={"flushed"}
          />
        </InputGroup>
        <Flex>SortBy Priority</Flex>
      </Flex>

      {/* Desktop Table */}
      {projectList.results && (
        <TableContainer>
          <Table size={"sm"} variant="simple" bg="white">
            <Thead>
              <Tr  w="full" bg="blue.50">
                {tableHeading.map((name, _i) => (
                  <Th py="16px" fontSize={".8rem"} textTransform={"capitalize"} key={_i}>
                    {name}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {projectList.results.map((item) => (
                <Tr
                  textTransform={"capitalize"}
                  fontWeight={"medium"}
                  key={item._id}
                  fontSize={".8rem"}
                  color="gray.600"
                >
                  <Td>
                    <Flex gap="8px" flexDirection={"column"}>
                      <Text fontSize="0.9rem" color={"blackAlpha"} fontWeight={"bold"}>
                        {item.theme}
                      </Text>
                      <Text>
                        {dateFormatter(item.start_date)} to{" "}
                        {dateFormatter(item.end_date)}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>{item.reason}</Td>
                  <Td>{item.type}</Td>
                  <Td>{item.division}</Td>
                  <Td>{item.category}</Td>
                  <Td>{item.priority}</Td>
                  <Td>{item.department}</Td>
                  {/* <Td>{item.end_date}</Td> */}
                  {/* <Td>{item.start_date}</Td> */}
                  <Td>{item.location}</Td>
                  <Td>
                    <Flex gap="2rem" alignItems={"center"}>
                      <Text fontWeight={"bold"} color="blackAlpha">
                        {item.status}
                      </Text>
                      <StatusButton id={item._id} />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ProjectListing;
