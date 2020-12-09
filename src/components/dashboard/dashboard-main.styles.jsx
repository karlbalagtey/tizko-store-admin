import React from 'react';
import styled from "styled-components";
import {
    Container
} from "@material-ui/core";

export const DashboardContainer = styled(({ ...props }) => (
    <Container {...props} />
))`
    ${({theme}) => `
        padding-top: ${theme.spacing(4)+'px'};
        padding-bottom: ${theme.spacing(4)+'px'};
    `}
`;
