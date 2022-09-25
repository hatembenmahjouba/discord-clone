import React from 'react';
import InputWithLabel from '../UI/InputWithLabel';

const RegisterBody = ({
  mail,
  setMail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label='E-mail address'
        type='text'
        placeholder='Enter e-mail address'
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label='Username'
        type='text'
        placeholder='Enter username'
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='password'
        type='password'
        placeholder='Enter password'
      />
    </>
  );
};

export default RegisterBody;
