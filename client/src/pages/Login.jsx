import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Button,
  IconButton,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
  Image,
  Center,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
// import bgImage from "../assets/Header-bg.svg";
import bgImage from "../assets/login-bg-1.svg";
import logo from "../assets/Logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { loginByUser } from './../store/auth/auth.slice';
import { Navigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setEmailIsError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const {loading,error,isLoggedIn} = useSelector(store=>store.auth);
  const toast = useToast()
  const dispatch = useDispatch()

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Validate
    if (email.trim() == "" && password.trim() == "") {
      setEmailIsError(true);
      setIsPasswordError(true);
      return;
    }
    if (email.trim() == "") {
      setEmailIsError(true);
      return;
    }
    if (password.trim() == "") {
      setIsPasswordError(true);
      return;
    }

    // Perform Logic
    dispatch(loginByUser({email,password}))
    console.log("Email:", email);
    console.log("Password:", password);
  };

    // Toast error 
    useEffect(()=>{
      if(error){
        toast({
          title: 'Wrong Credentials.',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      }
    },[error])
  // If loggedIn then send it to dashboard page
  if(isLoggedIn==true){
    return <Navigate to={"/"} />
  }
  return (
    <Box position="relative" bg="white">
      <Box
        w="100vw"
        h={["40vh", "50vh", "70vh", "70vh"]}
        backgroundSize={"cover"}
        bgImage={bgImage}
        bgRepeat={"no-repeat"}
      >
        <Flex
          w="full"
          flexDirection={"column"}
          alignItems={"center"}
          pt={["3.8rem", "3.8rem", "3rem", "4rem"]}
        >
          <Image boxSize={"5rem"} src={logo} alt="logo" />
          <Text fontSize="1.1rem" color="white">
            Online project management
          </Text>
        </Flex>
      </Box>

      {/* Login container */}
      <Box
        // border="1px solid blue"
        pos={["static", "static", "absolute", "absolute"]}
        top="40%"
        left="50%"
        transform={{ base: "auto", md: "translateX(-50%)" }}
        w={["90%", "90%", "70%", "30%"]}
        mx="auto"
        mt={{ base: "auto", md: 8 }}
        p={{ base: "auto", md: 10 }}
        pb={{ base: "0", md: "4rem" }}
        borderRadius="1rem"
        boxShadow="lg"
        bg="white"
      >
        <Text
          color="gray"
          fontWeight="bold"
          fontSize="1.1rem"
          textAlign={{ base: "left", md: "center" }}
          mt={{ base: "2rem", md: "auto" }}
          mb="2rem"
        >
          Login to get started
        </Text>

        <FormControl isInvalid={isEmailError}>
          <FormLabel
            mb="0px"
            pl="2px"
            fontSize=".9rem"
            fontWeight={"normal"}
            color="gray"
          >
            Email
          </FormLabel>
          <Input
            fontFamily={"monospace"}
            fontWeight={"bold"}
            color="gray"
            type="email"
            variant={"unstyled"}
            p="10px 12px"
            border="1.3px solid gray"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailIsError(false);
            }}
            mb={4}
          />
          {!isEmailError ? null : (
            <FormErrorMessage mt="-1rem">Email is required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl mt="1rem" isInvalid={isPasswordError}>
          <FormLabel
            mb="1px"
            pl="2px"
            fontSize=".9rem"
            fontWeight={"normal"}
            color="gray"
          >
            Password
          </FormLabel>
          <InputGroup>
            <Input
              color="gray"
              fontFamily={"monospace"}
              fontWeight={"bold"}
              variant={"unstyled"}
              p="10px 12px"
              border="1.3px solid gray"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPasswordError(false);
              }}
            />

            <InputRightElement>
              <IconButton
                icon={
                  showPassword ? (
                    <HiEyeOff size={"1.3rem"} />
                  ) : (
                    <HiEye size={"1.3rem"} />
                  )
                }
                variant="unstyled"
                onClick={handlePasswordVisibility}
                aria-label={showPassword ? "Hide Password" : "Show Password"}
              />
            </InputRightElement>
          </InputGroup>
          {!isPasswordError ? null : (
            <FormErrorMessage mt="0">Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Flex justifyContent={"flex-end"}>
          <Text fontSize=".7rem" fontWeight={"bold"} color="blue.400">
            Forget Password?
          </Text>
        </Flex>
        <Center>
          <Button
            px="3rem"
            mt="2rem"
            borderRadius={"1rem"}
            colorScheme="blue"
            onClick={handleLogin}
            w={["full", "full", "max-content", "max-content"]}
          >
            {loading? <Spinner size='md' />:"Login"}
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Login;
