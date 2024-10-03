import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
        <li><Link to="/Course-managment ">COURSE MANAGMENT</Link></li>
        <li><Link to="/View-Students ">VIEW USERS</Link></li>
        <li><Link to="/Schedule">SCHEDULES</Link></li>
        </ul>
      
      </div>
        
      <div className="content">
        <h1>Welcome to the Admin Dashboard</h1>
        
      </div>
    </div>
  );
}

export default Dashboard;
