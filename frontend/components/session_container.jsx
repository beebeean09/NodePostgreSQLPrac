import { connect } from 'react-redux';
import Session from './session';
import { signup, logout, login, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: Boolean(state.session),
  errors: state.session.errors,
  ownProps: ownProps,
  propType: ownProps.pathname.location.slice(1) == 'signup' ? 'Sign Up' : 'Login'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.location.pathname.slice(1) === 'login' ? login : signup;

  return {
    processForm: (user) => dispatch(processForm(user)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session);
