import { Flex, Button, Center, Spinner } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusByUser } from "../store/project/project.slice";

const StatusButton = ({ id }) => {
  const { loading } = useSelector((store) => store.project);
  const dispatch = useDispatch();
  const handleChangeStatus = (status) => {
    dispatch(changeStatusByUser({ payload: { status }, id }));
  };
  return (
    <Flex gap="8px">
      <button
        onClick={() => handleChangeStatus("running")}
        className="custom-button-start"
      >
        Start
      </button>
      <button
        onClick={() => handleChangeStatus("closed")}
        className="custom-button-close"
      >
        Close
      </button>
      <button
        onClick={() => handleChangeStatus("cancelled")}
        className="custom-button-cancel"
      >
        Cancel
      </button>
      <Center
        display={loading ? "block" : "none"}
        pos="fixed"
        top="50%"
        left="50%"
      >
        <Spinner size={"xl"} />
      </Center>
    </Flex>
  );
};

export default StatusButton;
