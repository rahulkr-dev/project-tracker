import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  Textarea,
  Flex,
  Text,
  Input,
  useMediaQuery,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { textAreaInfo } from "../utils/customData";
import { createProjectByUser } from "./../store/project/project.slice";
import { useDispatch, useSelector } from "react-redux";

const initalData = {
  theme: "",
  reason: "",
  type: "",
  division: "",
  category: "",
  priority: "",
  department: "",
  start_date: "",
  end_date: "",
  location: "",
};

const CreateProject = () => {
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 767px)",
    "(min-width: 768px)",
  ]);

  const [projectList, setProjectList] = useState(initalData);
  const toast = useToast();
  const dispatch = useDispatch();
  const { loading, newProjectAdded } = useSelector((store) => store.project);

  const handleChange = (e) => {
    setProjectList({ ...projectList, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validate
    for (let key in projectList) {
      if (projectList[key] == "") {
        toast({
          title: `All the fileds are required`,
          status: "error",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    }
    // Validate for Date
    if (new Date(projectList.end_date) < new Date(projectList.start_date)) {
      toast({
        title: `End date can't be less than Start date`,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    // Store in backend
    // console.log(projectList)
    dispatch(createProjectByUser(projectList));
    setProjectList(initalData)
  };

  useEffect(() => {
    if (newProjectAdded == true) {
      toast({
        title: `Project Added Successfully`,
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
  }, [newProjectAdded]);


  return (
    <Box bg="gray.100">
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
        pb="5rem"
        pt={{ base: "10rem", md: "2rem" }}
      >
        <Flex justifyContent={"space-between"} mt=".5rem" mb="3rem">
          <Textarea
            name="theme"
            value={projectList.theme}
            onChange={handleChange}
            fontSize={"15px"}
            variant={"unstyled"}
            border={"1px solid gray"}
            p="10px 15px"
            color="gray.500"
            w={{ base: "98%", md: "62%" }}
            mb={{ base: "-2rem", md: "auto" }}
            placeholder="Enter your Theme..."
          ></Textarea>
          {isDesktop ? (
            <Button
              color="white"
              borderRadius={"1rem"}
              variant={"unstyled"}
              bg="blue.600"
              p="6px 25px"
              onClick={handleSubmit}
            >
              {loading ? <Spinner size="md" /> : "Save Project"}
            </Button>
          ) : null}
        </Flex>

        <Grid
          gap="1rem"
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        >
          {textAreaInfo.map((item, _i) => (
            <Box key={_i}>
              <FormLabel color="gray" fontSize={".9rem"}>
                {item.name}
              </FormLabel>
              <select
                name={item.name.toLowerCase()}
                value={projectList[item.name.toLowerCase()]}
                onChange={handleChange}
                className="custom-select"
              >
                <option value="">Select</option>
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
            <FormLabel color="gray" fontSize={".9rem"}>
              Start date as per Project Plan
            </FormLabel>
            <input
              name="start_date"
              value={projectList.start_date}
              onChange={handleChange}
              type="date"
              className="custom-date"
            />
          </Box>
          <Box>
            <FormLabel color="gray" fontSize={".9rem"}>
              End date as per Project Plan
            </FormLabel>
            <input
              name="end_date"
              value={projectList.end_date}
              onChange={handleChange}
              type="date"
              className="custom-date"
            />
          </Box>

          <Box>
            <FormLabel color="gray" fontSize={".9rem"}>
              Location
            </FormLabel>
            <select
              name="location"
              value={projectList.location}
              onChange={handleChange}
              className="custom-select"
            >
              <option value="">Select</option>
              <option value="delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="pune">Pune</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </Box>
        </Grid>
        <Flex
          fontFamily={"cursive"}
          mb="2rem"
          pl="6px"
          mt="2rem"
          w="88%"
          justifyContent={{ base: "flex-start", md: "flex-end" }}
        >
          status:
          <Text fontWeight={"bold"} color="black" as="span" ml="3px">
            Registered
          </Text>
        </Flex>
        {isMobile ? (
          <Button
            color="white"
            borderRadius={"1rem"}
            variant={"unstyled"}
            bg="blue.600"
            p="6px 25px"
            onClick={handleSubmit}
          >
            {loading ? <Spinner size="md" /> : "Save Project"}
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};

export default CreateProject;
