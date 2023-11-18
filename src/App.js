import React, { Suspense } from 'react';
import ErrorBoundary from './components/common/ErrorBoundary';
//import EmailSent from './pages/EmailSent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AuthLayout from './layouts/AuthLayout';
// import Landing from './pages/Landing';
import { GlobalProvider } from './context/GlobalState';
import AuthState from './context/auth/AuthState';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/Home';
import ChangePassword from './pages/ChangePassword';
import ContactResponse from './pages/ContactResponse';
import Header from './pages/landingPage/Header';
import UpdateManager from './pages/UpdateManager';
import AdminDashboard from './pages/homePageDashboardAdmin/AdminDashboard';
import {Login} from './components/FirstTimeLogin/Login';
import ContactUs from './pages/contactUs/ContactUs';
import UserProfilePage from '../src/pages/user/UserProfilePage';
import UpdateUser from './pages/user/UpdateUser';
import RegularLogin from './pages/RegularLogin';
import LogoutPopout from './components/logout/Logout';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';

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

                <Route path="/" element={<HomePage />} />
                <Route path="/update-password" element={<ChangePassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/UpdateManager" element={<UpdateManager />} />               
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Footer-header" element={<Header />} />
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/user-page" element={<UpdateUser />} />
                <Route path= "/Regularlogin" element={<RegularLogin/>} />
                <Route path="/contactUs" element={<ContactUs />} />   
                <Route path="/logout" element={<LogoutPopout/>} />  
                <Route path='/contactResponse' element= {<ContactResponse/>} />
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
