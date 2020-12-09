import styled from "styled-components";

export const ForgotPassword = styled.a`
    ${({ theme }) => `
        color: ${theme.palette.secondary.main};
        display: block;
        margin-top: 20px;
        cursor: pointer;
    `}
`;