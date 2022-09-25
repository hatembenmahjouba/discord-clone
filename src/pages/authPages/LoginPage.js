import React, { useState } from 'react';
import LoginFooter from '../../components/Login/LoginFooter';
import LoginForm from '../../components/Login/LoginForm';
import LoginHeader from '../../components/Login/LoginHeader';
import AuthBox from '../../components/UI/AuthBox';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const handleLogin = () => {
    console.log('login in');
  };
  return (
    <AuthBox>
      <LoginHeader />
      <LoginForm
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
