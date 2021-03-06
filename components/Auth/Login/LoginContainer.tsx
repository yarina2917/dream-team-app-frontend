import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from './LoginForm';

import actions from '../../../redux/auth/actions';

const mapStateToProps = (state: any) => ({
    errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        loginUser: actions.loginUser,
        clearError: actions.clearUserError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
