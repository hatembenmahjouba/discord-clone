import React from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { getActions } from '../../redux/actions/alertActions';
import { useDispatch, useSelector } from 'react-redux';

const AlertNotification = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const { showAlertMessage, alertMessageContent } = alert;
  const { closeAlertMessage } = getActions(dispatch);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity='info'>{alertMessageContent}</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
