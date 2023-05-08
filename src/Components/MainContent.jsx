import React from 'react'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product.jsx';
import Rating from '../pages/Rating.jsx';
import Banking from '../pages/Banking.jsx';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
const MainContent = () => {
  return (
    <div>
       
      {/* <BrowserRouter>

   
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/product" element={<Product />} />
          <Route path="/rating" element={<Rating />} />
        </Routes> 
      
    </BrowserRouter> */}
    </div>
  )
}

export default MainContent
