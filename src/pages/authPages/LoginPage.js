import React, { useEffect, useState } from 'react';
import LoginFooter from '../../components/Login/LoginFooter';
import LoginBody from '../../components/Login/LoginBody';
import LoginHeader from '../../components/Login/LoginHeader';
import AuthBox from '../../components/UI/AuthBox';
import { validateLoginForm } from '../../utils/validators';

const LoginPage = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);
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
