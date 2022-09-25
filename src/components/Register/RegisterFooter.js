import { Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomPrimaryButton from '../UI/CustomPrimaryButton';
import RedirectInfo from '../UI/RedirectInfo';

const getFormNotValidMessage = () => {
  return 'Username sould contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provide';
};

const getFormValidMessage = () => {
  return 'Press to register!';
};

const RegisterFooter = ({ isFormValid, handleRegister }) => {
  const navigate = useNavigate();
  const handlePushToLoginPage = () => {
    navigate('/login');
  };
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label='Register'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=''
        redirectText='Already have an account?'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterFooter;
