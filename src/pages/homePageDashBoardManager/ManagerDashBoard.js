import React from 'react';
import '../homePageDashBoardManager/ManagerDashBoard.css';
import HorizontalBarChart from '../homePageDashboardAdmin/HorizontalBarChart.js';
import Sider from '../../components/SideBar/Sider.jsx';
import { Frame } from '../../components/Header/Header/Header.js';

function ManagerDashBoard() {
  return (
    <section className="mothercard">
      <Frame />
      <Sider />
      <h2 className="dashboard">Manager DashBoard</h2>
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
      </div>
    </section>
  );
}

export default ManagerDashBoard;
