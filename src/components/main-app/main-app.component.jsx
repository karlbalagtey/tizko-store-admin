import React, { useState, useEffect } from 'react';
import { Route, Switch, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import clsx from 'clsx';

import {
    AppBar,
    Drawer,
    Toolbar,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    CssBaseline,
    Divider,
    Button,
    Badge,
    Box,
} from '@material-ui/core';

import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    Notifications as NotificationsIcon,
} from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

import AlertNotification from '../../components/alert-notification/alert-notification.component';

import DashboardPage from '../../pages/dashboard/dashboard.container';
import CustomerPage from '../../pages/customer/customer.component';
import ProductPage from '../../pages/product/product.component';
import ProductAddPage from '../../pages/product-add/product-add.component';
import AccountPage from '../../pages/account/account.component';
import SettingsPage from '../../pages/settings/settings.component';
import SubscriptionPage from '../../pages/subscription/subscription.component';

import {
    selectCurrentUser,
} from '../../redux/user/user.selector';

import {
    selectAlertNotificationsSuccess,
    selectAlertNotificationsMessage,
    selectAlertNotificationsError,
    selectAlertNotificationsRedirect,
} from '../../redux/alert/alert.selector';

import { signOutStart } from '../../redux/user/user.actions';
import { selectMainMenu } from '../../redux/menu/menu.selectors';

import Copyright from '../copyright/copyright.component';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const MainApp = ({
    currentUser,
    userSignout,
    mainMenu,
    error,
    message,
    success,
    redirect,
}) => {
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(true);

    useEffect(() => {
        if(redirect) {
            history.push(redirect);
        }
    },[redirect]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AlertNotification
                success={success}
                message={message}
                error={error}
            />
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(
                            classes.menuButton,
                            open && classes.menuButtonHidden
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Tizko - Easy Goody
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <Button color="inherit" onClick={userSignout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(
                        classes.drawerPaper,
                        !open && classes.drawerPaperClose
                    ),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {mainMenu.map((menu) => (
                        <ListItem
                            button
                            component={Link}
                            to={menu.link}
                            key={menu.id}
                        >
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.appBarSpacer} />

                <Switch>
                    <Route exact path="/dashboard" component={DashboardPage} />
                    <Route
                        exact
                        path="/dashboard/customers"
                        component={CustomerPage}
                    />
                    <Route
                        exact
                        path="/dashboard/products"
                        component={ProductPage}
                    />
                    <Route
                        exact
                        path="/dashboard/add-product"
                        component={ProductAddPage}
                    />
                    <Route
                        exact
                        path="/dashboard/subscriptions"
                        component={SubscriptionPage}
                    />
                    <Route
                        exact
                        path="/dashboard/account"
                        component={AccountPage}
                    />
                    <Route
                        exact
                        path="/dashboard/settings"
                        component={SettingsPage}
                    />
                </Switch>

                <Box pt={4}>
                    <Copyright />
                </Box>
            </main>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    mainMenu: selectMainMenu,
    message: selectAlertNotificationsMessage,
    error: selectAlertNotificationsError,
    success: selectAlertNotificationsSuccess,
    redirect: selectAlertNotificationsRedirect,
});

const mapDispatchToProps = (dispatch) => ({
    userSignout: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
