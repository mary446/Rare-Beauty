import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ShadeFinder from './components/ShadeFinder';
import ShopNow from './components/ShopNow';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home/>
        <ShadeFinder/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopnow" element={<ShopNow />} />
          <Route path="/shadefinder" element={<ShadeFinder />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
