import React from "react";
import { useHistory } from "react-router";
import { Button, Box, Flex, Header, ContainerDiv } from "../styled";

const Overview = () => {
  const history = useHistory();

  return (
    <ContainerDiv width="500px">
      <Header data-cy="header" alignItems="end">
        My Employees
      </Header>
      <Flex
        height="80%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box marginBottom="lg">
          <Button
            data-cy="newEmployeeButton"
            onClick={() => history.push("/create")}
          >
            Add new employees
          </Button>
        </Box>
        <Box>
          <Button
            data-cy="viewEmployeesButton"
            onClick={() => history.push("/view")}
          >
            View all employees
          </Button>
        </Box>
      </Flex>
    </ContainerDiv>
  );
};

export default Overview;
