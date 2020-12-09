import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import Copyright from '../../components/copyright/copyright.component';

import { 
    SignInContainer, 
    SignInGrid,
    SignInBox
} from './sign-in.styles';

const SignInPage = () => (
    <SignInContainer component="main" maxWidth="xs">
        <SignInGrid container>
            <SignIn />
        </SignInGrid>
        <SignInBox>
            <Copyright />
        </SignInBox>
    </SignInContainer>
);

export default SignInPage;