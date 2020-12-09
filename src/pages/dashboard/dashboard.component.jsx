import React from 'react';
import { connect } from 'react-redux';

import DashboardMain from '../../components/dashboard/dashboard-main.component';

const Dashboard = ({ message, success, error }) => {
    return <DashboardMain />;
};

const mapStateToProps = (state) => ({
    message: state.user.message,
    success: state.user.success,
    error: state.user.error,
});

export default connect(mapStateToProps, null)(Dashboard);
