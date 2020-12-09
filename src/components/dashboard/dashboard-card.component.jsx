import React from "react";
import clsx from 'clsx';
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 240,
    },
}));

const DashboardCard = ({ title, total }) => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Paper className={fixedHeightPaper}>
            <Typography component="h2" variant="h6" gutterBottom>
                {title}
            </Typography>
            <Typography component="p" variant="h4">
                {total}
            </Typography>
        </Paper>
    );
}

export default DashboardCard;
