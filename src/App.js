// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Restaurant from './pages/Restaurant';
import Offers from './pages/Offers';
import About from './pages/About';
import './App.css';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import ManageBookings from './components/ManageBookings';
import ManageUsers from './components/ManageUsers';



function App() {
  return (
    <main className='main'>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/manageBookings" element={<ManageBookings />} />
            <Route path="/ManageUsers" element={<ManageUsers />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </main>
  );
}

export default App;
