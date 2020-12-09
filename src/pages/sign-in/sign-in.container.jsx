import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsUserSubmitting } from "../../redux/user/user.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import SignInPage from "./sign-in.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => selectIsUserSubmitting(state)
});

const SignInPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SignInPage);

export default SignInPageContainer;