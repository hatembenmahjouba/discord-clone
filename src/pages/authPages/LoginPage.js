import React, { useState } from 'react';
import LoginFooter from '../../components/Login/LoginFooter';
import LoginBody from '../../components/Login/LoginBody';
import LoginHeader from '../../components/Login/LoginHeader';
import AuthBox from '../../components/UI/AuthBox';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const handleLogin = () => {
    console.log('login in');
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginBody
        mail={mail}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <LoginFooter isFormValid={isFormValid} handleLogin={handleLogin} />
    </AuthBox>
  );
};

export default LoginPage;
