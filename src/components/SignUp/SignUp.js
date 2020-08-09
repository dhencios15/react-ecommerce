import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import schema from '../../helpers/Input-Validation';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import './SignUp.style.scss';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema.SignUpSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data, e) => {
    const { displayName, email, password, confirmPassword } = data;
    if (password !== confirmPassword) return console.log('MALI');
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    e.target.reset();
  };

  return (
    <div className='sign-in'>
      <h2>I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name='displayName'
          type='text'
          register={register}
          label='Display Name'
        />
        <p style={{ color: 'red' }}>{errors.displayName?.message}</p>

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
        <FormInput
          name='confirmPassword'
          type='password'
          register={register}
          label='Confirm Password'
        />
        <p style={{ color: 'red' }}>{errors.confirmPassword?.message}</p>

        <div className='buttons'>
          <CustomButton type='submit'> SIGN UP </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
