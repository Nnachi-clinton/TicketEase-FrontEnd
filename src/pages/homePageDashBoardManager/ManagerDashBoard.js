import React, { useEffect, useState } from 'react';
import '../homePageDashBoardManager/ManagerDashBoard.css';
import HorizontalBarChart from '../homePageDashboardAdmin/HorizontalBarChart.js';
import Sider from '../../components/SideBar/Sider.jsx';
import AxiosInstance from '../../Request/AxiosInstance.js';
import { Frame } from '../../components/Header/Header/Header.js';
import ManagerTable from './ManagerTable.js';
import CreateBoardEmptyManager from '../CreateBoardEmptyManager.js';
import RegisteredMembers from '../RegisteredMembers.js';
import LogoutPopout from '../../components/logout/Logout.js';
import ContactUs from '../contactUs/ContactUs.js';

function ManagerDashBoard() {
  const [managers, setManagers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);
  const [step, setStep] = useState(0);

  const getManagers = async () => {
    try {
      const res = await AxiosInstance.get(
        `/managers/GetAll?page=${currentPage}&perPage=${itemsPerPage}`
      );

      setManagers(res.data.result.data.data);
      setTotalItems(res.data.result.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewClick = (manager) => {
    console.log('View clicked:', manager);
  };

  useEffect(() => {
    getManagers();
  }, [currentPage]);
  return (
    <section className="mothercard">
      <Frame />
      <Sider step={step} selectstep={(step) => setStep(step)} />
      <>
        {step === 0 && (
          <>
            <h2 className="dashboard">Manager DashBoard</h2>
            <div className="container">
              <h2 className="text">Total Members</h2>
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
              <h1 className="org"> Registered Members</h1>
            </div>
            <div className="tablecard">
              <div className="tableit">
                <ManagerTable
                  companies={managers}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  handleViewClick={handleViewClick}
                  totalItems={totalItems}
                  setCurrentPage={setCurrentPage}
                  getManagers={getManagers}
                />
              </div>
            </div>
          </>
        )}
        {step === 1 && <RegisteredMembers />}
        {step === 2 && <CreateBoardEmptyManager />}
        {step === 3 && <ContactUs />}
        {step === 5 && <LogoutPopout />}
      </>
    </section>
  );
}

export default ManagerDashBoard;
