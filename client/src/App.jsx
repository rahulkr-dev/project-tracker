import React from "react";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import AllRoutes from "./components/AllRoutes";
import DestopNavigation from "./components/DestopNavigation";
import MobileNavigation from "./components/MobileNavigation";
import { useLocation } from "react-router-dom";

const App = () => {
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 767px)",
    "(min-width: 768px)",
  ]);
  const location = useLocation()
  // console.log(location.pathname)

  return (
    <Box >
      {/* DESKTOP  */}
      {location.pathname!=="/login" && isDesktop && (
        <Box>
          <DestopNavigation />
        </Box>
      )}

      {/* MOBILE */}
      {location.pathname!=="/login" && isMobile && (
        <Box>
          <MobileNavigation />
        </Box>
      )}

      <Box bg="gray.200" ml={location.pathname!=="/login" ? { base: "0", lg: "4rem" }:0}>
        <AllRoutes />
      </Box>
    </Box>
  );
};

export default App;
