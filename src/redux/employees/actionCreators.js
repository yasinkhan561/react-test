import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};

export const updateEmployee = employee => dispatch => {
  dispatch(actions.updateEmployee(employee));
};

export const removeEmployee = employeeId => dispatch => {
  dispatch(actions.removeEmployee(employeeId));
};
