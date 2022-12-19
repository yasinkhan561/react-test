import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records = [
          ...draftState.employees_records,
          action.payload,
        ];
      },
    },
    updateEmployee: {
      prepare: employee => ({
        payload: { ...employee },
      }),
      reducer(draftState, action) {
        const updatedEployees = draftState.employees_records.map(employee => {
          if (employee.id !== action.payload.id) {
            // This isn't the item we care about - keep it as-is
            return employee;
          }
          // Otherwise, this is the one we want - return an updated value
          return {
            ...employee,
            ...action.payload,
          };
        });
        draftState.employees_records = updatedEployees;
      },
    },
    removeEmployee: (draftState, action) => {
      const remainingEmployees = draftState.employees_records.filter(
        emp => !action.payload.map(b => b.id).includes(emp.id)
      );
      draftState.employees_records = remainingEmployees;
    },
  },
});

export const { saveNewEmployee, updateEmployee, removeEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
