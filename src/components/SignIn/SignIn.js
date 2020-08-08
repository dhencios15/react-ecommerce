import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import './SignIn.style.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is Required')
    .email('Please input valid email')
    .trim(),
  password: yup.string().required('Password is required').min(6).trim(),
});

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='email'
          type='email'
          register={register}
          label='Email'
        />
        <p style={{ color: 'red' }}>{errors.email?.message}</p>

        <FormInput
          name='password'
          type='password'
          register={register}
          label='Password'
        />
        <p style={{ color: 'red' }}>{errors.password?.message}</p>

        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
