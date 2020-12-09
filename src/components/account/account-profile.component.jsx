import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { updateUserProfile } from '../../redux/user/user.actions';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Typography,
    Divider,
    Button,
    LinearProgress,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    details: {
        display: 'flex',
    },
    avatar: {
        marginLeft: 'auto',
        height: 110,
        width: 100,
        flexShrink: 0,
        flexGrow: 0,
    },
    progress: {
        marginTop: theme.spacing(2),
    },
    uploadButton: {
        marginRight: theme.spacing(2),
    },
}));

const AccountProfile = ({ currentUser }) => {
    // useEffect(() => {
    //   console.log(currentUser);
    // });

    const classes = useStyles();

    const user = {
        city: 'Quezon City',
        country: 'Philippines',
        timezone: 'GMT+7',
        avatar: '/images/avatars/avatar_11.png',
    };

    return (
        <Card>
            <CardContent>
                <div className={classes.details}>
                    <div>
                        <Typography variant="h3">
                            {currentUser.user.firstName}
                        </Typography>
                        <Typography gutterBottom variant="h3">
                            {currentUser.user.lastName}
                        </Typography>
                        <Typography
                            className={classes.dateText}
                            color="textSecondary"
                            variant="body1"
                        >
                            {moment().format('hh:mm A')} ({user.timezone})
                        </Typography>
                    </div>
                    <Avatar className={classes.avatar} src={user.avatar} />
                </div>
                <div className={classes.progress}>
                    <Typography variant="body1">
                        Profile Completeness: 70%
                    </Typography>
                    <LinearProgress value={70} variant="determinate" />
                </div>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    className={classes.uploadButton}
                    color="primary"
                    variant="text"
                >
                    Upload picture
                </Button>
                <Button variant="text">Remove picture</Button>
            </CardActions>
        </Card>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

// const mapDispatchToProps = (dispatch) => ({
//   updateAccountProfile: (userCredentials) => dispatch(updateUserProfile()),
// });

export default connect(mapStateToProps, null)(AccountProfile);
