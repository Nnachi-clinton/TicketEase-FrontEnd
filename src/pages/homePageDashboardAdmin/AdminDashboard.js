import React from 'react';
// import PropTypes from 'prop-types';
// import { useTable, usePagination } from 'react-table';
import '../homePageDashboardAdmin/AdminDashboard.css';
import notification from '../../assets/images/notification 1.svg';
import HorizontalBarChart from "./HorizontalBarChart.js";
// import notification from "./image/notification 1.svg";
import CompanyTable from "./CompanyTable.js";

function AdminDashBoard() {
  return (
    <section className="mothercard">
      <h2 className="dashboard">Admin Dashboard</h2>
      <div className="container">
        <h2 className="text">Total Orgnisations</h2>
        <div className="inner-box">
          <h1 className="text2">80</h1>
        </div>

        <div />
      </div>

      <div>
        <div className="card">
          <div className="graphwork">
            <div className="card4">
              <h1 className="active">ACTIVITIES</h1>
            </div>
            <div className="chartdiv">
              <HorizontalBarChart />
            </div>
          </div>
        </div>
        <div className="bellCard">
          <div className="bellImg">
            {/* <div className='ring'> */}
            <img src={notification} alt="bell" />
          </div>
          <div className="bellText">
            <h1>No notification yet</h1>
            <h2>
              You have currently no notification. <br></br>
              We'll notify you when something new arrives!
            </h2>
          </div>
        </div>
        <h1 className="org"> Registered Orgnisations</h1>
      </div>

      <div className="tablecard">
        <div className="tableit">
          <CompanyTable />
        </div>
      </div>
    </section>
  );
}

export default AdminDashBoard;
