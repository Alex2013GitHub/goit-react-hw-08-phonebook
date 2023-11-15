import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';

import { StyledRegisterPage } from './RegisterPage.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <StyledRegisterPage>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="label">
          <span>Email:</span>
          <input
            {...register('email', { required: true })}
            type="email"
            name="email"
            className="input"
          />
          {errors.email && <span>This field is required</span>}
        </label>
        <label className="label">
          <span>Name:</span>
          <input
            {...register('name', { required: true })}
            type="text"
            name="name"
            className="input"
          />
          {errors.name && <span>This field is required</span>}
        </label>
        <label className="label">
          <span>Password:</span>
          <input
            {...register('password', { required: true, minLength: 7 })}
            type="password"
            name="password"
            className="input"
          />
          {errors.password && <span>This field is required</span>}
        </label>

        <button type="submit" className="btn">
          Sign Up
        </button>
      </form>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
