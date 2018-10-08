import React from 'react';
import { connect } from 'react-redux';

import { clearAuth } from '../actions/auth.js';
import { clearAuthToken } from '../local-storage.js';

export class NavBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
    }

    return (
      <nav>
        <h1>JWT Auth React App Template</h1>
        {logOutButton}
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);
