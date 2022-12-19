import React, { useCallback } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Flex, Header, ContainerDiv } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import { saveNewEmployee } from "../../redux/employees/actionCreators";
import FormDatePicker from "./FormDatePicker";
import FormSelect from "./FormSelect";

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
      dispatch(saveNewEmployee(updatedEmployee));
      history.push("/view");
      toast.success("Employee is successfuly added");
    },
    [dispatch, history]
  );

  return (
    <ContainerDiv width="500px">
      <Header>Create new employee</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={{
          id: new Date().getTime(),
          firstName: "",
          surname: "",
          email: "",
          birthDate: "",
          jobTitle: "",
          status: "",
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
export default Create;
