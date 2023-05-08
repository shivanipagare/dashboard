import React from 'react'
import './styles/Dashboard.css'
import {FaShoppingCart} from 'react-icons/fa'
import {BsFillPieChartFill,BsFillBarChartFill} from 'react-icons/bs'
const Dashboard = () => {
  return (
    <>

<div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Order<br/>
          <FaShoppingCart/>
        </div>

        <div class="ag-courses-item_date-box">
          Total : 
          <span class="ag-courses-item_date">
             5000000+
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Total Revenue
          <br/>
          <BsFillPieChartFill/>
        </div>

        <div class="ag-courses-item_date-box">
          Total:
          <span class="ag-courses-item_date">
            456123+
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Annual package <br/>
<BsFillBarChartFill/>
        </div>

        <div class="ag-courses-item_date-box">
          Total:
          <span class="ag-courses-item_date">
            987654+
          </span>
        </div>
      </a>
    </div>

</div>
</div>

    </>

  )
}

export default Dashboard
