import React from "react";

import { Grid } from "@material-ui/core";

import DashboardWidget from "./dashboard-card.component";

import { DashboardContainer } from "./dashboard-main.styles.jsx";

const Dashboard = () => (
    <DashboardContainer maxWidth="lg">
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <DashboardWidget title="Total Sales" total="P100,000,000" />
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <DashboardWidget title="No of Customers" total="20" />
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <DashboardWidget title="Recent Subscriptions To Be Reviewed" total="500" />
            </Grid>
        </Grid>
    </DashboardContainer>
);

export default Dashboard;
