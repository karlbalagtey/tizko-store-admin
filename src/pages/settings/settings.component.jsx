import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import UpdatePassword from '../../components/password/update-password.component';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
    },
}));

const Settings = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item md={5} xs={12}>
                    <UpdatePassword />
                </Grid>
            </Grid>
        </div>
    );
};

export default Settings;
