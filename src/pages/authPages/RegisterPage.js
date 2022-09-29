import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import AuthBox from '../../components/UI/AuthBox';
import RegisterBody from '../../components/Register/RegisterBody';
import RegisterFooter from '../../components/Register/RegisterFooter';
import { validateRegisterForm } from '../../utils/validators';
import { getActions } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, username, password, setIsFormValid]);

  const handleRegister = () => {
    const { register } = getActions(dispatch);
    register({ mail, username, password }, navigate);
  };
  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <RegisterBody
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <RegisterFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

export default RegisterPage;
