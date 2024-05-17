import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavTabs from './component/NavTabs';
import Footer from './component/footer';  
import Home from './page/home';
import History from './page/history';
import RequestMoney from './page/request_money';
import Customer from './page/customer';
import Profile from './page/profile';
import RequestMain from './page/request_main';
import RequestFare from './page/request_fare';
import Login from './page/login';
import Register from './page/register';
import Notification from './page/notification';
import Setting from './page/setting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

function MainLayout() {
  return (
    <>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/request_main" element={<RequestMain />} />
        <Route path="/request_money" element={<RequestMoney />} />
        <Route path="/request_fare" element={<RequestFare />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
