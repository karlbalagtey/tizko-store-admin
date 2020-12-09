import React from "react";
import { withRouter } from "react-router-dom";

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from "./menu-item.styles";

const MenuItem = ({ title, history, linkUrl, match }) => (
    <MenuItemContainer
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className="background-image"
        >
            <ContentContainer className="content">
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>Enter</ContentSubtitle>
            </ContentContainer>
        </BackgroundImageContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);
