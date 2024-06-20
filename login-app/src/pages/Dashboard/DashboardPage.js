import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <button><Link to="/logout">Logout</Link></button>
    </div>
  );
}

export default DashboardPage;
