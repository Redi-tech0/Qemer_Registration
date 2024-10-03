import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './assets/Components/Nav';
import Home from './assets/Components/Home';
import About from './assets/Components/About';
import Courses from './assets/Components/Courses';
import Footer from './assets/Components/Footer';
import CourseRegistration from './assets/Components/CourseRegistration';

const App = () => {
  return (
    <div>
         <Nav/>
        
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Courses" element={<Courses />} />
    <Route path="/courses/:courseId/register" element={<CourseRegistration />} />
     </Routes>
     <Footer/>
    </div>
    
  )
}

export default App;
