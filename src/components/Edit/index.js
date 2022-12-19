import React, { useCallback } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import { Flex, Header, ContainerDiv } from "../styled";
import FormField from "../Create/FormField";
import FormButtons from "../Create/FormButtons";
import formValidationSchema from "../Create/formValidationSchema";
import FormDatePicker from "../Create/FormDatePicker";
import FormSelect from "../Create/FormSelect";
import { updateEmployee } from "../../redux/employees/actionCreators";

const Edit = () => {
  const { employeeId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const employeesRecords = useSelector(
    state => state.employees.employees_records
  );
  const singleEmployee = employeesRecords
    .filter(employee => employee.id === parseInt(employeeId, 10))
    .shift();

  const dropdownoptions = [
    { key: "Select an option", value: "" },
    { key: "ACTIVE", value: "ACTIVE" },
    { key: "LEAVE_OF_ABSENCE", value: "LEAVE_OF_ABSENCE" },
    { key: "TERMINATED", value: "TERMINATED" },
  ];
  const submitForm = useCallback(
    employee => {
      // Create a new object with the updated birthDate property
      const updatedEmployee = {
        ...employee,
        birthDate: employee.birthDate.toISOString().slice(0, 10),
      };
      dispatch(updateEmployee(updatedEmployee));

      history.push("/view");
      toast.success("Employee record successfuly Updated");
    },
    [dispatch, history]
  );

  return (
    <ContainerDiv width="500px">
      <Header>Update Employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          id: singleEmployee.id,
          firstName: singleEmployee.firstName,
          surname: singleEmployee.surname,
          email: singleEmployee.email,
          birthDate: new Date(singleEmployee.birthDate),
          jobTitle: singleEmployee.jobTitle,
          status: singleEmployee.status,
        }}
      >
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormDatePicker name="birthDate" placeholder="Date Of Birth" />
            <FormField name="jobTitle" placeholder="Job Title" />
            <FormSelect
              name="status"
              options={dropdownoptions}
              className="customSelect"
            />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </ContainerDiv>
  );
};

export default Edit;
