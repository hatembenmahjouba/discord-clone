import { openAlertMessage } from './alertActions';
import * as api from '../../api';

export const friendsActions = {
  SET_FRIENDS: 'SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'SET_ONLINE_USERS',
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) => {
      dispatch(sendFriendInvitation(data, closeDialogHandler));
    },
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      dispatch(openAlertMessage(response.exeption?.response?.data));
    } else {
      dispatch(openAlertMessage('Invitation has been sent!'));
      closeDialogHandler();
    }
  };
};
