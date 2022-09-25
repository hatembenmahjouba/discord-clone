import React from 'react';
import CustomPrimaryButton from '../UI/CustomPrimaryButton';

const LoginFooter = ({ handleLogin, isFormValid }) => {
  return (
    <div>
      <CustomPrimaryButton
        label='Log in'
        additionalStyles={{ marginTop: '30px' }}
        disabled={!isFormValid}
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginFooter;
