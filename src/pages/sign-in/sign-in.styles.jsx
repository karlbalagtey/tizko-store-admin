import React from 'react';
import styled from "styled-components";
import {
    Grid,
    Container,
    Box
} from '@material-ui/core';

export const SignInContainer = styled(({ ...props }) => (
    <Container {...props} />
))``;

export const SignInGrid = styled(({ ...props }) => (
    <Grid {...props} />
))``;

export const SignInBox = styled(({ ...props }) => (
    <Box {...props} />
))`
    margin-top: 100px;
`;