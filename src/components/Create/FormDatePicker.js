import React from "react";
import { Field, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { Box } from "../styled";
import ErrorMessage from "./styled/ErrorMessage";
import DateField from "./styled/DateField";

const FormDatePicker = ({ name, placeholder }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta, form: { setFieldValue } }) => (
          <DateField
            {...field}
            selected={field.value || null}
            dateFormat="yyyy-MM-dd"
            onChange={val => {
              setFieldValue(field.name, val);
            }}
            error={meta.error && meta.touched}
            placeholderText={placeholder}
            showYearDropdown
            yearDropdownItemNumber={150}
            scrollableYearDropdown
            data-cy={`${name}Input`}
            className="react-date-picker"
          />
        )}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorMessage data-cy={`${name}ErrorMessage`}>
          {errors[name]}
        </ErrorMessage>
      )}
    </Box>
  );
};

export default FormDatePicker;
