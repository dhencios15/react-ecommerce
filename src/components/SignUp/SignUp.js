import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import './SignUp.style.scss';
import schema from '../../helpers/Input-Validation';
import { signUpStart } from '../../redux/user/userActions';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema.SignUpSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data, e) => {
    const { email, password, displayName, confirmPassword } = data;
    if (password !== confirmPassword) return console.log('MALI');
    dispatch(signUpStart({ email, password, displayName }));
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
