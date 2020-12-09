import React from 'react';
import styled from "styled-components";

import {
    Grid,
    Container
} from '@material-ui/core';

export const PageContainer = styled(({ ...props }) => (
    <Container {...props} />
))``;

export const PageGrid = styled(({ ...props }) => (
    <Grid {...props} />
))``;

export const PageWrap = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20%;

    @media screen and (max-width: 800px) {
        width: 100%;
        margin-bottom: 50px;
    }
`;

export const Title = styled.h2`
    ${({ theme }) => `
        margin: 10px 0;
        font-size: 30px;
        color: ${theme.palette.primary.main}
    `}
`;