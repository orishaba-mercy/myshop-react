import React from 'react';
import './App.css';
import Products from './Products';
import Login from './Login';
import NavBar from './NavBar';
import ProductDetails from './Productsdetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/Products' element={<Products />} />
          <Route path='/Productdetails/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
         
          {/* <Route path='/add' element={<Form />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;







