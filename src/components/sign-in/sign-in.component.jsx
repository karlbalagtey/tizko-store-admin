import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core';

import {
    emailSignInStart
} from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    FormContainer
} from './sign-in.styles';

import logo from '../../assets/eslogo.png';

import AlertNotification from '../alert-notification/alert-notification.component';
import ForgotPasswordDialog from '../forgot-password/forgot-password.component';

const SignIn = ({ emailSignInStart, message, error, success }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: '',
        password: '',
    });
    const { email, password } = userCredentials;

    const handleSubmitSignIn = async (event) => {
        event.preventDefault();

        await emailSignInStart(email, password);
    };

    const handleChange = (event) => {
        const { value, name } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <AlertNotification
                success={success}
                message={message}
                error={error}
            />
            <img src={logo} alt="Easy Goody Logo" />
            <SignInTitle>Easy Goody</SignInTitle>

            <FormContainer onSubmit={handleSubmitSignIn}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Sign in
                </Button>
            </FormContainer>

            <ForgotPasswordDialog />
        </SignInContainer>
    );
};

const mapStateToProps = (state) => ({
    message: state.alert.message,
    success: state.alert.success,
    error: state.alert.error
});

const mapDispatchToProps = (dispatch) => ({
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
