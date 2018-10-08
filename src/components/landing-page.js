import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) return <Redirect to="/dashboard" />;

  return (
    <main>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </main>
  );
}

const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
