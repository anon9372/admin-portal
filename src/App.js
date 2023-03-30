import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/login';
import Register from './pages/register'
import Dasboard from './pages/dashboard';
import Users from './pages/users';
import Products from './pages/products';
import AdminLayout from './layout/admin';
import './styles/styles.css'

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route element={<AdminLayout />}>
            <Route exact path='/' element={<Dasboard />} />

            <Route path='/users' element={<Users />} />

            <Route path='/products' element={<Products />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
