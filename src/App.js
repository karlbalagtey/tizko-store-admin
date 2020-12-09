import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CssBaseline } from '@material-ui/core';

import SignInPage from './pages/sign-in/sign-in.container';
import ResetPassword from './pages/reset-password/reset-password.component';

import MainApp from './components/main-app/main-app.component';
import PageNotFound from './pages/page-not-found/page-not-found.component';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    MuiThemeProvider,
    StylesProvider,
    createMuiTheme,
} from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                    secondary: {
                        main: '#007dff',
                        contrastText: '#fff',
                    },
                    primary: {
                        main: '#C15751',
                        contrastText: '#fff',
                    },
                },
            }),
        [prefersDarkMode]
    );

    const MainAppWrap = () => (
        <React.Fragment>
            <MainApp />
        </React.Fragment>
    );

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <Router>
                        <CssBaseline />
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() =>
                                    currentUser ? (
                                        <Redirect to="/dashboard" />
                                    ) : (
                                        <SignInPage />
                                    )
                                }
                            />
                            <Route
                                path="/reset-password/:token"
                                component={ResetPassword}
                            />
                            <Route
                                path="/dashboard"
                                render={() =>
                                    currentUser ? (
                                        <MainAppWrap />
                                    ) : (
                                        <SignInPage />
                                    )
                                }
                            />
                            <Route component={PageNotFound} />
                        </Switch>
                    </Router>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
