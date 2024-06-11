import React from 'react'
import "./App.css"
import { Router } from './router/Router';
import { UserProvider } from './components/providers/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
