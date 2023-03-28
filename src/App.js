import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/login';
import Register from './pages/register'
import Dasboard from './pages/dashboard';
import Users from './pages/users';
import Products from './pages/products';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route exact path='/' element={<Dasboard />} />

          <Route path='/users' element={<Users />} />

          <Route path='/produts' element={<Products />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
