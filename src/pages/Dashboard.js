import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import SideBar from '../components/SideBar/SideBar';
import FriendsSideBar from '../components/FriendsSideBar/FriendsSideBar';
import Messenger from '../components/Messenger/Messenger';
import AppBar from '../components/AppBar/AppBar';
import { logout } from '../utils/auth';
import { getActions } from '../redux/actions/authActions';
import { useDispatch } from 'react-redux';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      logout();
    } else {
      const { setUserDetails } = getActions(dispatch);
      setUserDetails(JSON.parse(userDetails));
    }
  }, [dispatch]);
  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

export default Dashboard;
