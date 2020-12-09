import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDashboardMenu } from "../../redux/dashboard/dashboard.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DashboardMenuContainer } from "./dashboard-menu.styles";

const DashboardMenu = ({ menuItems }) => (
    <DashboardMenuContainer>
        { menuItems.map(menuItem => (
            <MenuItem
                key={menuItem.id}
                title={menuItem.title}
                linkUrl={menuItem.linkUrl}
            />
        )) }
    </DashboardMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    menuItems: selectDashboardMenu
});

export default connect(mapStateToProps)(DashboardMenu);
