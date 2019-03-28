import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignInForm from '../SignInForm';

class SignInPage extends Component {
  handleUsernameChange = e => {
    const { value } = e.target;
    const { userActions } = this.props;

    userActions.setUsername(value);
  };

  handlePasswordChange = e => {
    const { value } = e.target;
    const { userActions } = this.props;

    userActions.setPassword(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userActions } = this.props;

    userActions.signIn();
  };

  render() {
    const { username, password } = this.props;

    return (
      <div
        style={{
          width: '100%',
          maxWidth: '330px',
          padding: '15px',
          margin: 'auto',
          textAlign: 'center'
        }}
      >
        <h2 className="mb-4">Inicio de sesión</h2>
        <SignInForm
          username={username}
          password={password}
          onUsernameChange={this.handleUsernameChange}
          onPasswordChange={this.handlePasswordChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

SignInPage.defaultProps = {
  username: '',
  password: ''
};

SignInPage.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  userActions: PropTypes.object.isRequired
};

export default SignInPage;
