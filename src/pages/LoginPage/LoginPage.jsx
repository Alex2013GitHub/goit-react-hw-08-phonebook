import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';

import { StyledLoginPage } from './LoginPage.styled';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <StyledLoginPage>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="label">
          <span className="title">Email:</span>
          <input
            {...register('email', { required: true })}
            type="email"
            className="input"
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label className="label">
          <span className="title">Password:</span>
          <input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            className="input"
          />
          {errors.password && <span>This field is required</span>}
        </label>

        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
    </StyledLoginPage>
  );
};

export default LoginPage;
