import React from "react";
import {
    Typography,
    Link
} from '@material-ui/core';

const Copyright = ({ children, ...props }) => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://polviks.com">
            Polviks
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default Copyright;
