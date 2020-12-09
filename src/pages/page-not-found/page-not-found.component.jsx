import React from 'react';

import {
    Title,
    PageContainer,
    PageGrid,
    PageWrap,
} from './page-not-found.styles';

import logo from '../../assets/eslogo.png';

const PageNotFound = () => (
    <PageContainer component="main" maxWidth="xs">
        <PageGrid container>
            <PageWrap>
                <img src={logo} alt="Easy Goody Logo" />
                <Title>Uh oh! Page Not Found</Title>
            </PageWrap>
        </PageGrid>
    </PageContainer>
);

export default PageNotFound;
