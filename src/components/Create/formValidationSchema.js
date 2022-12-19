import * as yup from "yup";

const formValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  surname: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  email: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .email("Invalid email address")
    .required("Required"),
  birthDate: yup
    .date()
    .nullable()
    .required("Required")
    .max(new Date(), "Date of birth must be earlier than today"),
  jobTitle: yup
    .string()
    .trim()
    .max(255, "The maximum number of characters is 255")
    .required("Required"),
  status: yup.string().trim().required("Required"),
});

export default formValidationSchema;
