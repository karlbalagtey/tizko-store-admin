import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.actions";

import { selectCurrentUser, selectCurrentUserRole } from "../../redux/user/user.selector";

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from "./header.styles";

const Header = ({ currentUser, currentUserRole, userSignout }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            Easy Goody
        </LogoContainer>
        <OptionsContainer>
            {
                (currentUserRole === 'SuperAdmin') ? (
                    <>
                        <OptionLink to="/client">CLIENTS</OptionLink>
                    </>
                ) : (
                    ''
                )
            }

            {currentUser ? (
                <>
                    <OptionLink to="/dashboard">DASHBOARD</OptionLink>
                    <OptionLink to="/product">PRODUCTS</OptionLink>
                    <OptionLink as="div" onClick={userSignout}>SIGN OUT</OptionLink>
                </>
            ) : (
                <OptionLink to="/">SIGN IN</OptionLink>
            )}
        </OptionsContainer>
    </HeaderContainer>
);

const mapDispatchToProps = dispatch => ({
    userSignout: () => dispatch(signOutStart()) 
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    currentUserRole: selectCurrentUserRole
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
