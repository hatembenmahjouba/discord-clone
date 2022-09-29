import React, { useEffect, useState } from 'react';
import LoginFooter from '../../components/Login/LoginFooter';
import LoginBody from '../../components/Login/LoginBody';
import LoginHeader from '../../components/Login/LoginHeader';
import AuthBox from '../../components/UI/AuthBox';
import { validateLoginForm } from '../../utils/validators';
import { getActions } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    setIsFormValid(validateLoginForm({ mail, password }));
  }, [mail, password, setIsFormValid]);
  const handleLogin = () => {
    const { login } = getActions(dispatch);
    login({ mail, password }, navigate);
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
