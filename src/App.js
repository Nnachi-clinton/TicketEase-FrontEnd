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
                <Route path='/' element={<Header/>} />
                <Route path="/" element={<HomePage />} />
                
              </Routes>
            </AuthState>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
