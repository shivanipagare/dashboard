import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Product from '../pages/Product'
import Rating from '../pages/Rating'
import Banking from '../pages/Banking'
import Booking from '../pages/Booking'
const Sidebar = () => {

  return (
    <>
      
      <div id="wrapper" class="toggled"  >
      
        <div id="sidebar-wrapper">

        <div>
      <h4 style={{ color: "white", fontStyle: "italic", fontWeight: "bold",padding:"20px"}}>SHOPPER's</h4>
      </div>
          <ul class="sidebar-nav">
            <li>
              <Link to="/pages/dashboard">
              Dashboard
              </Link>
            </li>

            <li>
              <Link to="/pages/product">Product</Link>
            </li>
            <li>
              <Link to="/pages/banking">Banking</Link>
            </li>
            <li>
              <Link to="/pages/rating">Rating</Link>
            </li>
            <li>
              <Link to="/pages/booking">Booking</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
