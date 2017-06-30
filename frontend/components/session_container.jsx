import { connect } from 'react-redux';
import Session from './session';

const mapStateToProps = (state) => ({
  currentUser: Boolean(state.session)
});

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default connect(mapStateToProps, null)(Session);
