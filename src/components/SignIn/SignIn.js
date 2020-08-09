import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import schema from '../../helpers/Input-Validation';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import './SignIn.style.scss';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema.SignInSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data, e) => {
    const { email, password } = data;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      e.target.reset();
    } catch (error) {
      console.log(error.message);
    }
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
