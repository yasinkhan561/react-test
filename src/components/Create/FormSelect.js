import React from "react";
import { Field, useFormikContext } from "formik";
import SelectField from "./styled/SelectField";
import { Box } from "../styled";
import ErrorMessage from "./styled/ErrorMessage";

const FormSelect = ({ name, options }) => {
  const { errors, touched } = useFormikContext();
  return (
    <Box marginBottom="md">
      <Field name={name}>
        {({ field, meta }) => (
          <SelectField
            as="select"
            data-cy={`${name}Input`}
            fontSize="lg"
            fluid
            error={meta.error && meta.touched}
            {...field}
          >
            {options.map(option => {
              return (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </SelectField>
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

export default FormSelect;
