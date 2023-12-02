import React, { Suspense } from 'react';
import ErrorBoundary from '../components/common/ErrorBoundary';
//import EmailSent from './pages/EmailSent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AuthLayout from './layouts/AuthLayout';
// import Landing from './pages/Landing';
import { GlobalProvider } from '../context/GlobalState';
import AuthState from '../context/auth/AuthState';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Home';
import ChangePassword from './ChangePassword';
import ContactResponse from './ContactResponse';
import Header from './landingPage/Header';
import UpdateManager from './UpdateManager';
import AdminDashboard from './homePageDashboardAdmin/AdminDashboard';
import { Login } from '../components/FirstTimeLogin/Login';
import ContactUs from './contactUs/ContactUs';
import UserProfilePage from './user/UserProfilePage';
import UpdateUser from './user/UpdateUser';
import RegularLogin from './RegularLogin';
import LogoutPopout from '../components/logout/Logout';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import AddManager2 from './manager/AddManagerFom';
import NoOrganisation from './manager/EmptyOrganisation';
import ProfileDetails from './ProfileDetails';
import ManagerDashBoard from './homePageDashBoardManager/ManagerDashBoard';
import CreateBoard from './Boards/CreateBoard';
import RegisteredMembers from './RegisteredMembers';
import CreateOrganizationsAdmin from './admin/CreateOrganizationsAdmin';
import AllMembers from './AllMembersPage/AllMembersPage';
import BoardLandingPage from './board/BoardLandingPage';
import CreateBoardEmptyManager from './CreateBoardEmptyManager';
import TableData from './companyInfoTable/TableData';
import CreateProject from './Projects/CreateProject';
import CreateTicket from './TicketInputfield';
import CreateNewTicket from './CreateNewTIcket';
import PersonalInfo from './PersonalInfo.js';
import AllProjects from './AllProjectsPage/AllProjects.jsx';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <AuthState>
              <Routes>
                {/* <Route exact path="/" element={<AuthLayout />}>
                  <Route exact path="/" element={<Landing />} /> */}
                {/* <Route path="/email-sent" element={<EmailSent />} /> */}

                {/* </Route> */}
                <Route path="/TableData" element={<TableData />} />
                <Route path="/TableData" element={<TableData />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/add-manager" element={<AddManager2 />} />
                <Route path="/no-organisation" element={<NoOrganisation />} />
                <Route path="/update-password" element={<ChangePassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/UpdateManager" element={<UpdateManager />} />
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                <Route
                  path="/ManagerDashBoard"
                  element={<ManagerDashBoard />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/Footer-header" element={<Header />} />
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/user-page" element={<UpdateUser />} />
                <Route path="/Regularlogin" element={<RegularLogin />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/logout" element={<LogoutPopout />} />
                <Route path="/contactResponse" element={<ContactResponse />} />
                <Route path="/create-board" element={<CreateBoard />} />
                <Route
                  path="/RegisteredMembers"
                  element={<RegisteredMembers />}
                />
                <Route path="/ProfileDetails" element={<ProfileDetails />} />
                <Route
                  path="/adminscreen"
                  element={<CreateOrganizationsAdmin />}
                />
                <Route path="/allMembers" element={<AllMembers />} />
                <Route path="/boardlanding" element={<BoardLandingPage />} />
                <Route
                  path="/createboard"
                  element={<CreateBoardEmptyManager />}
                />
                <Route path="/CreateProject" element={<CreateProject />} />
                <Route path="/CreateTicket" element={<CreateTicket />} />
                <Route path="/createNewTicket" element={<CreateNewTicket />} />
                <Route path="/PersonalInfo" element={<PersonalInfo />} />
                <Route path='/AllProjects' element={<AllProjects/>} />
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
