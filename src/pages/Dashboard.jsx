import React from 'react'
import './styles/Dashboard.css'
import Table from 'react-bootstrap/Table';
import { Chart } from "react-google-charts";
import { FaShoppingCart } from 'react-icons/fa'
import { BsFillPieChartFill, BsFillBarChartFill } from 'react-icons/bs'
const Dashboard = () => {
  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };

  const datas = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const option = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <>

      <div class="ag-format-container">
        <div class="ag-courses_box">
          <div class="ag-courses_item">
            <a href="#" class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                Order<br />
                <FaShoppingCart />
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
                <br />
                <BsFillPieChartFill />
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
                Annual package <br />
                <BsFillBarChartFill />
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

        <div class="flex-container">
          <div class="flex-item-first" style={{ border: "1px solid gray" }}>

            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              style={{ fontSize: "10px" }}
              data={data}
              options={options}
            />

          </div>
          <div class="flex-item-second" style={{ border: "1px solid gray" }}>

            <Chart
              chartType="PieChart"
              width="100%"
              height="400px"

              data={datas}
              options={option}
            />

          </div>
          <div class="flex-item-third" style={{ border: "1px solid gray" }}>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
        

      </div>

    </>

  )
}

export default Dashboard
