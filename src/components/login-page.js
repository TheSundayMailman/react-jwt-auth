import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form.js';

export function LoginPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) return <Redirect to="/dashboard" />;

  return (
    <main>
      <h2>Login Page</h2>
      <LoginForm />
      <Link to="/register">Register</Link>
    </main>
  );
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
