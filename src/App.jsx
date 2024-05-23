
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Jackets from './components/Jackets';
import Jeans from './components/Jeans';
import Gloves from './components/Gloves';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import React, { useState } from 'react';
import Blog from './components/Blog';

const App = () => {
  const [cart,] = useState([]); 
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jackets' element={<Jackets />} />
          <Route path='/jeans' element={<Jeans />} />
          <Route path='/gloves' element={<Gloves />} />
          <Route path='/contact' element={<Contact cart={cart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
