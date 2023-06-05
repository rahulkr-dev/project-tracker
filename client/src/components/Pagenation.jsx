import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectByUser } from "../store/project/project.slice";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Pagination = () => {
  const { loading, error, projectList } = useSelector((store) => store.project);
  const { currentPage, totalPages } = projectList;
  const dispatch = useDispatch();
  //   get array of pages
  const getPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  //   function for handling page change
  const handlePageChange = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      // dispatch action which contain page and limit by default 10
      dispatch(getProjectByUser({ limit: 10, page }));
    }
  };

  const renderPageButtons = () => {
    const pageNumbers = getPageNumbers();

    return pageNumbers.map((page) => (
      <Button
        key={page}
        size="sm"
        variant={"unstyled"}
        bg={page === currentPage ? "skyblue" : "transparent"}
        colorScheme="blue"
        borderRadius={page === currentPage ? "full" : "md"}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    ));
  };

  return (
    <Box w="max-content" m="auto">
        <Button
        bg="transparent"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeftIcon />
        </Button>
        {renderPageButtons()}
        <Button
         bg="transparent"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowRightIcon />
        </Button>
    </Box>
  );
};

export default Pagination;
