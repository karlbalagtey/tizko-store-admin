import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
} from '@material-ui/core';

import { forgotPasswordStart } from '../../redux/user/user.actions';
import { ForgotPassword } from './forgot-password.styles';

const ForgotPasswordDialog = ({ forgotPasswordStart }) => {
    const [userResetPassword, setUserResetPassword] = useState({
        emailReset: '',
    });

    const { emailReset } = userResetPassword;

    const [openDialog, setOpenDialog] = useState(false);

    const handleSubmitResetPassword = async (event) => {
        await forgotPasswordStart(emailReset);
        // setOpenStatus(true);
    };

    const handleChangeResetPassword = (event) => {
        const { value, name } = event.target;

        setUserResetPassword({ ...userResetPassword, [name]: value });
    };

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <div>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >
                <form onSubmit={handleSubmitResetPassword}>
                    <DialogContent>
                        <DialogContentText>
                            To reset password, please enter your email address
                            here. We will send you a password reset link.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="emailReset"
                            label="Email Address"
                            type="email"
                            onChange={(e) => handleChangeResetPassword(e)}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit">Reset password</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <ForgotPassword onClick={handleClickOpenDialog}>
                Forgot password?
            </ForgotPassword>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    forgotPasswordStart: (email) => dispatch(forgotPasswordStart({ email })),
});

export default connect(null, mapDispatchToProps)(ForgotPasswordDialog);
