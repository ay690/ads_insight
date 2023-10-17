import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdsForm from "./components/AdsForm";
import MediaForm from "./components/MediaForm";
import CheckboxForm from "./components/CheckboxForm";
import "../node_modules/antd/dist/antd";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/checkform" element={<CheckboxForm />} />
        <Route path="/ads" element={<AdsForm />} />
        <Route path="/media" element={<MediaForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
