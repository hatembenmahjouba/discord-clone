import Dialog from '@mui/material/Dialog';
import React, { useEffect, useState } from 'react';
import { validateMail } from '../../utils/validators';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import InputWithLabel from '../UI/InputWithLabel';
import CustomPrimaryButton from '../UI/CustomPrimaryButton';
import { useDispatch } from 'react-redux';
import { getActions } from '../../redux/actions/friendsActions';

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    const { sendFriendInvitation } = getActions(dispatch);
    sendFriendInvitation(mail);
  };
  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);
  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabel
            label='Mail'
            type='text'
            value={mail}
            setValue={setMail}
            placeholder='Enter mail address'
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label='Send'
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddFriendDialog;
