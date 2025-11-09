import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import SessionPage from './components/SessionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/session/:unique_id" element={<SessionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
