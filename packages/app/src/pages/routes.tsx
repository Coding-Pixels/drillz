import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { Register } from '.';
import { AppContainer } from '../components';

function AppRoutes() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default AppRoutes;
