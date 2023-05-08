import React from 'react';
import logo from './logo.svg';
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Rating from './pages/Rating';
import Banking from './pages/Banking';
import Booking from './pages/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (

<>
<div><Navbar/></div>
    <div className='d-flex' style={{width:"70%",justifyContent:"center",flex:"1"}}>
      
      <div>
        <Sidebar />
      </div>
      <div style={{marginLeft:"400px"}}>
        <Routes>
          <Route path="/pages/dashboard" element={<Dashboard />} />
          <Route path="/pages/banking" element={<Banking />} />
          <Route path="/pages/product" element={<Product />} />
          <Route path="/pages/rating" element={<Rating />} />
          <Route path="/pages/booking" element={<Booking />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
