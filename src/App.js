import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Catagories from './components/Catagories';
import NavBar from './components/NavBar';
import BookContainer from './components/BookContainer';
import './App.css';

const App = () => (
  <div className="container">
    <NavBar />
    <Routes>
      <Route path="/" element={<BookContainer />} />
      <Route path="/catagories" element={<Catagories />} />
    </Routes>
  </div>
);

export default App;
