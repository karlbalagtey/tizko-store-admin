import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsUserSubmitting } from "../../redux/user/user.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import DashboardPage from "./dashboard.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsUserSubmitting(state)
});

const DashboardPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DashboardPage);

export default DashboardPageContainer;