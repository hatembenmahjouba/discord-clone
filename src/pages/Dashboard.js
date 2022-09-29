import React from 'react';
import { styled } from '@mui/system';
import SideBar from '../components/SideBar/SideBar';
import FriendsSideBar from '../components/FriendsSideBar/FriendsSideBar';
import Messenger from '../components/Messenger/Messenger';
import AppBar from '../components/AppBar/AppBar';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = () => {
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
