import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Agents from './pages/Agents';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ListPage from './pages/ListPage';
import SinglePage from './pages/SinglePage';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import UpdateProfile from './pages/UpdateProfile';

export default function App() {
  return (
    <Router>
      <div className='sticky top-0 z-10'>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/:id" element={<SinglePage />} />
        {/* Protect the Profile route */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/updateProfile" 
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          } 
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}
