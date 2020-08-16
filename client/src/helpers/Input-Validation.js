import * as yup from 'yup';

const SignUpSchema = yup.object().shape({
  displayName: yup.string().required('Display name is required'),
  email: yup
    .string()
    .required('Email is Required')
    .email('Please input valid email')
    .trim(),
  password: yup.string().required('Password is required').min(6).trim(),
  confirmPassword: yup.string().required('Password is required').min(6).trim(),
});

const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is Required')
    .email('Please input valid email')
    .trim(),
  password: yup.string().required('Password is required').min(6).trim(),
});

const schemas = {
  SignInSchema,
  SignUpSchema,
};

export default schemas;
