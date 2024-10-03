import React from 'react';
import Sidebar from './DashboardLayout';
import './DashboardLayout.css'; // Optional for more layout styling

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
