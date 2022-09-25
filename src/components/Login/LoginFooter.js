import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../UI/CustomPrimaryButton';
import RedirectInfo from '../UI/RedirectInfo';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Enter correct e-mail address and password should contains between 6 and 12 characters';
};

const getFormValidMessage = () => {
  return 'Press to log in!';
};

const LoginFooter = ({ handleLogin, isFormValid }) => {
  const navigate = useNavigate();
  const handlePushToRegisterPage = () => {
    navigate('/register');
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label='Log in'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account?'
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  );
};

export default LoginFooter;
