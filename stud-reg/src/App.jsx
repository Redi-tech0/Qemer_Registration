import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from './assets/Components/Admin/DashboardLayout';

import Nav from './assets/Components/User/Nav';
import Home from './assets/Components/User/Home';
import About from './assets/Components/User/About';
import Courses from './assets/Components/User/Courses';
import Footer from './assets/Components/User/Footer';
import CourseRegistration from './assets/Components/User/CourseRegistration';

import Login from './assets/Components/Admin/Login';
import Dashboard from './assets/Components/Admin/Dashboard';
import CourMgt from './assets/Components/Admin/CourMgt';
import ViewStud from './assets/Components/Admin/ViewStud';
import Schedule from './assets/Components/Admin/Schedule';





const App = () => {
  return (
    <div>
         
         <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Courses" element={<Courses />} />
     <Route path="/courses/:courseId/register" element={<CourseRegistration />} />

{/* admin */}
    <Route path="/admin" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/Course-managment" element={ < CourMgt />}/>
    <Route path="/View-Students" element={ < ViewStud />}/>
    <Route path="/Schedule" element={<Schedule />} />
     </Routes>
     <Footer/>
    </div>
    
  )
}

export default App;
