import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { removeEmployee } from "../../redux/employees/actionCreators";
import { Button, Box, Flex, Header, ContainerDiv } from "../styled";

const EditButton = React.memo(({ row }) => {
  const history = useHistory();
  return (
    <Button
      data-cy="editButton"
      onClick={() => history.push(`/edit/${row.id}`)}
    >
      Edit
    </Button>
  );
});

const columns = [
  { name: "First Name", selector: row => row.firstName },
  { name: "Surname", selector: row => row.surname },
  { name: "Email", selector: row => row.email },
  { name: "Birth Date", selector: row => row.birthDate },
  { name: "Job Title", selector: row => row.jobTitle },
  { name: "Status", selector: row => row.status },
  {
    name: "Action",
    cell: row => <EditButton row={row} />,
  },
];

const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const employeesRecords = useSelector(
    state => state.employees.employees_records
  );
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);

  const handleRowSelected = React.useCallback(state => {
    setSelectedRows(state.selectedRows);
  }, []);

  const AddButton = React.useMemo(() => {
    return (
      <Button
        data-cy="newEmployeeButton"
        onClick={() => history.push("/create")}
      >
        Add new employee
      </Button>
    );
  }, [history]);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        // eslint-disable-next-line no-restricted-globals
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            r => r.firstName
          )}?`
        )
      ) {
        dispatch(removeEmployee(selectedRows));
        setToggleCleared(!toggleCleared);
        toast.success("Employee record successfuly removed");
      }
    };

    return (
      <Box>
        <Button
          data-cy="deleteButton"
          onClick={handleDelete}
          style={{ backgroundColor: "red" }}
        >
          Delete
        </Button>
      </Box>
    );
  }, [selectedRows, toggleCleared, dispatch]);

  return (
    <ContainerDiv width="96%">
      <Header data-cy="header">View Employees</Header>

      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <DataTable
          title="Employees"
          columns={columns}
          data={employeesRecords}
          striped
          highlightOnHover
          pointerOnHover
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
          paginationPerPage={5}
          // make it selectable
          actions={AddButton}
          selectableRows // add for checkbox selection
          selectableRowsHighlight // add for highlight selection
          selectableRowsComponent="input"
          contextActions={contextActions}
          onSelectedRowsChange={handleRowSelected}
          clearSelectedRows={toggleCleared}
        />
        <Button data-cy="backButton" onClick={() => history.push("/")}>
          Back
        </Button>
      </Flex>
    </ContainerDiv>
  );
};

export default View;
