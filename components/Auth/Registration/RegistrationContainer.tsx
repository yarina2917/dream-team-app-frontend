import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegistrationForm from './RegistrationForm';

import actions from '../../../redux/auth/actions';

const mapStateToProps = (state: any) => ({
    errorMessage: state.auth.errorMessage
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        createUser: actions.createUser,
        clearError: actions.clearUserError
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
