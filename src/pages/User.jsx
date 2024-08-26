// src/pages/User.js
import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Viewing profile for user ID: {userId}</p>
      {/* Fetch user data based on userId and display here */}
    </div>
  );
};

export default User;
