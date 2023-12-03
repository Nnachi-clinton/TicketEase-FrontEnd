import React, { useEffect, useState } from 'react';
import '../homePageDashBoardManager/ManagerDashBoard.css';
import HorizontalBarChart2 from '../homePageDashBoardManager/HorizontalBarChart2.js';
import Sider from '../../components/SideBar/Sider.jsx';
import AxiosInstance from '../../Request/AxiosInstance.js';
import { Frame } from '../../components/Header/Header/Header.js';
import ManagerTable from './ManagerTable.js';
import CreateBoardEmptyManager from '../CreateBoardEmptyManager.js';
import RegisteredMembers from '../RegisteredMembers.js';
import LogoutPopout from '../../components/logout/Logout.js';
import ContactUs from '../contactUs/ContactUs.js';
import ChangePassword from '../ChangePassword.js';
import BoardMain from '../BoardPage/BoardMain.js';
import AllMembers from '../AllMembersPage/AllMembersPage.js';
import CreateProject from '../Projects/CreateProject.js';
import AllProjects from '../AllProjectsPage/AllProjects.jsx';
import CreateBoard from '../Boards/CreateBoard.js';
import ManagerView from '../../components/ManagerView/managerView.js';
import AllTickets from '../tickets/all-tickets.js';

function ManagerDashBoard() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalItems, setTotalItems] = useState(0);
  const [step, setStep] = useState(0);

  const handleBoardMain = () => {
    setStep(7);
  };
  const handleAllMembers = () => {
    setStep(8);
  };

  const handleCreateProject = () => {
    setStep(9);
  };

  const handleViewAllProjecs = () => {
    setStep(10);
  };

  const handleCreateBoard = () => {
    setStep(11);
  };

  const handleViewTickets = () => {
    setStep(13);
  };

  const getUsers = async () => {
    try {
      const res = await AxiosInstance.get(
        // `/User/get-Users-By-ManagerId?managerId=${localStorage.getItem('mangerId')}&page=${currentPage}&perPage=${itemsPerPage}`
        `/User/get-Users-By-ManagerId?managerId=6db01435-a30c-44ae-9e23-95e1fecf0180&page=${currentPage}&perPage=${itemsPerPage}`
      );

      console.log(res.data);
      //const { data, totalCount } = res.data;
      setUsers(res.data.data);
      setTotalItems(res.data.totalCount);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const handleViewClick = (users) => {
    console.log('View clicked:', users);
  };

  return (
    <section className="mothercard">
      <Frame
        logout={() => setStep(5)}
        ChangePassword={() => setStep(6)}
        managerdetails={() => setStep(12)}
      />
      <Sider step={step} selectstep={(step) => setStep(step)} />
      <>
        {step === 0 && (
          <>
            <h2 className="dashboard">Manager DashBoard</h2>
            <div className="container">
              <h2 className="text">Total Members</h2>
              <div className="inner-box">
                <h1 className="text2">{totalItems}</h1>
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
                    <HorizontalBarChart2 />
                  </div>
                </div>
              </div>
              <h1 className="org"> Registered Members</h1>
            </div>
            <div className="tablecard">
              <div className="tableit">
                <ManagerTable
                  registeredUsers={users}
                  currentPage={currentPage}
                  itemsPerPage={itemsPerPage}
                  handleViewClick={handleViewClick}
                  totalItems={totalItems}
                  setCurrentPage={setCurrentPage}
                  getUsers={getUsers}
                />
              </div>
            </div>
          </>
        )}
        {step === 1 && (
          <RegisteredMembers handleAllMembers={handleAllMembers} />
        )}
        {step === 2 && (
          <CreateBoardEmptyManager handleBoardMain={handleBoardMain} />
        )}
        {step === 3 && <ContactUs />}
        {step === 5 && <LogoutPopout />}
        {step === 6 && <ChangePassword />}
        {step === 7 && (
          <BoardMain
            handleCreateProject={handleCreateProject}
            handleViewAllProjecs={handleViewAllProjecs}
            handleCreateBoard={handleCreateBoard}
            handleViewTickets={handleViewTickets}
          />
        )}
        {step === 8 && <AllMembers />}
        {step === 9 && (
          <CreateProject handleViewAllProjecs={handleViewAllProjecs} />
        )}
        {step === 10 && <AllProjects handleViewTickets={handleViewTickets} />}
        {step === 11 && <CreateBoard />}
        {step === 12 && <ManagerView />}
        {step === 13 && <AllTickets />}
      </>
    </section>
  );
}

export default ManagerDashBoard;
