import React, { useEffect, useState } from "react";
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
  useMediaQuery,
  Grid,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProjectByUser, searchByUser, sortBasedOnValue } from "../store/project/project.slice";
import StatusButton from "../components/StatusButton";
import { FcGenericSortingDesc } from "react-icons/fc";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Pagination from "../components/Pagenation";
import { debounce } from "lodash";

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
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 767px)",
    "(min-width: 768px)",
  ]);


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(searchByUser(search));
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, dispatch]);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const dateFormatter = (dateFromDb) => {
    const date = new Date(dateFromDb);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    dispatch(getProjectByUser({ limit: 10, page: 1 }));
  }, []);

  // SORT
  const handleSort = (e)=>{
    setSort(e.target.value)
    dispatch(sortBasedOnValue(e.target.value))
  }
  return (
    <Box bg="gray.200" borderRadius={"lg"} pb={{ base: "5rem", md: 0 }}>
      <Header title={"DashBoard"} />
      <Box
        boxShadow={"lg"}
        mt={{ base: 0, md: "-2.3rem" }}
        borderRadius={{ base: "none", md: "3xl" }}
        w={{ base: "full", md: "98%" }}
        m="auto"
      >
        {/* Search and Sort */}
        <Flex
          pt={{ base: "5rem", md: "0" }}
          pl={{ base: "1rem", md: "1rem" }}
          pb="1rem"
          justifyContent={{ base: "flex-start", md: "space-between" }}
          bg={{ base: "gray.200", md: "white" }}
          boxShadow={"md"}
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray" />
            </InputLeftElement>
            <Input
              value={search}
              onChange={handleSearch}
              w="240px"
              placeholder="Search"
              type="search"
              variant={"flushed"}
            />
          </InputGroup>
          <Flex mr="2rem">
            <select
              style={{
                width: "max-content",
                border: "none",
                background: "transparent",
                fontFamily: "monospace",
              }}
              name="sort"
              value={sort}
              onChange={handleSort}
              className="custom-select"
            >
              <option value="">
                {isMobile && `Sort By`}
                {isDesktop && ` Sort By : Priority`}
              </option>
              <option value="theme">Name</option>
              <option value="reason">Reason</option>
              <option value="type">Type</option>
              <option value="start_date">Start Date</option>
              <option value="end_date">End Date</option>
              <option value="division">Division</option>
              <option value="category">Category</option>
              <option value="priority">Priority</option>
              <option value="department">Deptartment</option>
              <option value="location">Location</option>
              <option value="status">Status</option>
            </select>
          </Flex>
        </Flex>

        {/* Desktop Table */}
        {isDesktop && projectList.results && (
          <TableContainer>
            <Table size={"sm"} variant="simple" bg="white">
              <Thead>
                <Tr w="full" bg="blue.50">
                  {tableHeading.map((name, _i) => (
                    <Th
                      py="16px"
                      fontSize={".8rem"}
                      textTransform={"capitalize"}
                      key={_i}
                    >
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
                        <Text
                          fontSize="0.9rem"
                          color={"blackAlpha"}
                          fontWeight={"bold"}
                        >
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

      {/* For mobile */}
      {isMobile && projectList.results && (
        <Grid gap="1rem" mt="1rem" fontFamily={"monospace"} pb="2rem">
          {projectList.results.map((item, _i) => (
            <Box
              borderRadius={"lg"}
              w="90%"
              m="auto"
              bg="white"
              boxShadow={"md"}
              p="1rem"
              fontSize={".8rem"}
              textTransform={"capitalize"}
              key={_i}
            >
              <Flex justifyContent={"space-between"}>
                <Text color="gray" fontWeight={"medium"} fontSize={"1.1rem"}>
                  {item.theme}
                </Text>
                <Text color="gray" fontWeight={"bold"}>
                  {item.status}
                </Text>
              </Flex>
              <Text color="gray.500">
                {dateFormatter(item.start_date)} to{" "}
                {dateFormatter(item.end_date)}
              </Text>
              <Flex gap="5px" mt="10px">
                <Text color="gray.500">Reason:</Text>
                <Text fontWeight={"bold"} color="gray.800">
                  {item.reason}
                </Text>
              </Flex>
              <Flex gap="5px">
                <Flex gap="5px">
                  <Text color="gray.500">Type:</Text>
                  <Text fontWeight={"bold"} color="gray.800">
                    {item.type}
                  </Text>
                </Flex>
                <Text>*</Text>
                <Flex gap="5px">
                  <Text color="gray.500">Category:</Text>
                  <Text fontWeight={"bold"} color="gray.800">
                    {item.category}
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="5px">
                <Flex gap="5px">
                  <Text color="gray.500">Div:</Text>
                  <Text fontWeight={"bold"} color="gray.800">
                    {" "}
                    {item.division}
                  </Text>
                </Flex>
                <Text>*</Text>
                <Flex gap="5px">
                  <Text color="gray.500">Dept: </Text>
                  <Text fontWeight={"bold"} color="gray.800">
                    {item.department}
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="5px">
                <Text color="gray.500">Location:</Text>
                <Text fontWeight={"bold"} color="gray.800">
                  {item.location}
                </Text>
              </Flex>
              <Flex gap="5px">
                <Text color="gray.500">Priority:</Text>
                <Text fontWeight={"bold"} color="gray.800">
                  {item.priority}
                </Text>
              </Flex>
              <Box mt="1.5rem">
                <StatusButton id={item._id} />
              </Box>
            </Box>
          ))}
        </Grid>
      )}

      {/* Page nation */}
      <Box p={{ base: "0 0 1rem 0", md: "2rem" }}>
        <Pagination />
      </Box>
    </Box>
  );
};

export default ProjectListing;
