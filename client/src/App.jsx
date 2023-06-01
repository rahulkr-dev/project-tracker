import React from "react";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import AllRoutes from "./components/AllRoutes";
import DestopNavigation from "./components/DestopNavigation";
import MobileNavigation from "./components/MobileNavigation";

const App = () => {
  const [isMobile, isDesktop] = useMediaQuery([
    "(max-width: 767px)",
    "(min-width: 768px)",
  ]);

  return (
    <Box >
      {/* DESKTOP  */}
      {isDesktop && (
        <Box>
          <DestopNavigation />
        </Box>
      )}

      {/* MOBILE */}
      {isMobile && (
        <Box>
          <MobileNavigation />
        </Box>
      )}

      <Box bg="gray.200" ml={{ base: "0", lg: "4rem" }}>
        <AllRoutes />
      </Box>
    </Box>
  );
};

export default App;
