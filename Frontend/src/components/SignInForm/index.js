import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const SignInForm = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Input
          className="form-control"
          type="text"
          name="username"
          id="username-id"
          required
          autoFocus
          placeholder="Usuario"
          value={username}
          onChange={onUsernameChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          className="form-control"
          type="password"
          name="password"
          id="password-id"
          required
          placeholder="Contraseña"
          value={password}
          onChange={onPasswordChange}
        />
      </FormGroup>
      <Button color="primary" className="btn-lg btn-block">
        Login
      </Button>
    </Form>
  );
};

SignInForm.defaultProps = {
  username: '',
  password: ''
};

SignInForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SignInForm;
