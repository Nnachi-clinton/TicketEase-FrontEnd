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
import Header from './pages/landingPage/Header';
import UpdateManager from './pages/UpdateManager';
import AdminDashboard from './pages/homePageDashboardAdmin/AdminDashboard';
//import AdminDashboard from './pages/homePageDashboardAdmin/AdminDashboard';
import AppLogin from './pages/FirstTimeLogin';
import ContactUs from './pages/contactUs/ContactUs';
import UserProfilePage from '../src/pages/user/UserProfilePage';
import UpdateUser from './pages/user/UpdateUser';

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
                <Route path="/UpdateManager" element={<UpdateManager />} />

               
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path="/" element={<AppLogin />} />
                <Route path='/' element={<HomePage/>} />
                <Route path="/Footer-header" element={<Header />} />
                
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/user-profile" element={<UserProfilePage />} />
                <Route path="/user-page" element={<UpdateUser />} />
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
