import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { Button, TextField } from '@material-ui/core';

import { resetPasswordStart, validateResetTokenStart } from '../../redux/user/user.actions';

import {
    Title,
    FormContainer,
    ResetContainer,
    ResetGrid,
    ResetWrap,
} from './reset-password.styles';

import logo from '../../assets/eslogo.png';

import AlertNotification from '../../components/alert-notification/alert-notification.component';

const ResetPassword = ({ resetPassword, validateToken, message, success, error }) => {    
    const { token }  = useParams();

    useEffect(() => {        

        if (!token) {
            return (
                <Redirect to="/" />
            )
        }
    });


    const [userCredentials, setUserCredentials] = useState({
        password: '',
        confirmPassword: '',
    });

    const { password, confirmPassword } = userCredentials;

    const handleSubmitResetPassword = async (event) => {
        event.preventDefault();

        console.log(token);
        console.log(password, confirmPassword);

        await resetPassword(token, password, confirmPassword);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <ResetContainer component="main" maxWidth="xs">
            <ResetGrid container>
                <ResetWrap>
                    <AlertNotification
                        success={success}
                        message={message}
                        error={error}
                    />

                    <img src={logo} alt="Easy Goody Logo" />
                    <Title>Easy Goody</Title>

                    <FormContainer>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            label="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            onChange={handleChange}
                        />
                        <Button
                            size="large"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={(e) => handleSubmitResetPassword(e)}
                        >
                            Reset Password
                        </Button>
                    </FormContainer>
                </ResetWrap>
            </ResetGrid>
        </ResetContainer>
    );
};

const mapStateToProps = (state) => ({
    message: state.user.message,
    success: state.user.success,
    error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
    resetPassword: (token, password, confirmPassword) =>
        dispatch(resetPasswordStart({ token, password, confirmPassword })),
    validateToken: (token) => dispatch(validateResetTokenStart({ token })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
