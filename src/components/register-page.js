import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegisterForm from './register-form.js';

export function RegisterPage(props) {
  // If we are logged in (which happens automatically when registration is successful), redirect to the user's dashboard
  if (props.loggedIn) return <Redirect to="/dashboard" />;

  return (
    <main>
      <h2>Register Page</h2>
      <RegisterForm />
      <Link to="/">Login</Link>
    </main>
  );
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);
