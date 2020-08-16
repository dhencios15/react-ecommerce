import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import './SignIn.style.scss';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/userActions';

import schema from '../../helpers/Input-Validation';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

const SignIn = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema.SignInSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data, e) => {
    dispatch(emailSignInStart(data));
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
          <CustomButton type='submit'>SIGN IN</CustomButton>
          <CustomButton
            type='button'
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
