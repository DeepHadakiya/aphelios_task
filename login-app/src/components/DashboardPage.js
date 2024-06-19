import React from 'react';
import { Link } from 'react-router-dom';

function DashboardPage() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default DashboardPage;