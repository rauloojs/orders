import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';

class SignOutPageContainer extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.signOut();
  }

  render() {
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    dispatch
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignOutPageContainer);
