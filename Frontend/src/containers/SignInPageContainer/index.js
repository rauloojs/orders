import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignInPage from '../../components/SignInPage';
import * as userActions from '../../actions/userActions';

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
    dispatch
  };
}

const mapStateToProps = state => ({
  username: state.user.username,
  password: state.user.password
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
