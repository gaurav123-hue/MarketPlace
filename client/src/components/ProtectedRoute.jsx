// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext); // Get the current user from context

  if (!currentUser) {
    // If there is no current user, redirect to the login page
    return <Navigate to="/signin" />;
  }

  // If the user is authenticated, render the children (protected component)
  return children;
};

export default ProtectedRoute;
