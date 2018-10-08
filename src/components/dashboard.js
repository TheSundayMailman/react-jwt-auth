import React from 'react';
import { connect } from 'react-redux';

import requiresLogin from './requires-login.js';
import { fetchProtectedData } from '../actions/protected-data.js';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <main className="dashboard">
        <h1>You are logged in!</h1>
        <p>Username: {this.props.username}</p>
        <p>Name: {this.props.name}</p>
        <p>Protected data: {this.props.protectedData}</p>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
