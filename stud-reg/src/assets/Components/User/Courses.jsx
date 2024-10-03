import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

function Courses() {
    
  const courses = [
    { id: 1, name: 'React Basics', description: 'Learn the basics of React.' , 
      // schedule: [
      //   { day: 'Monday', time: '10:00 AM - 12:00 PM' },
      //   { day: 'Wednesday', time: '2:00 PM - 4:00 PM' }
      // ],
     },
    { id: 2, name: 'Advanced JavaScript', description: 'Deep dive into JavaScript.' ,
      // schedule: [
      //   { day: 'Monday', time: '10:00 AM - 12:00 PM' },
      //   { day: 'Wednesday', time: '2:00 PM - 4:00 PM' }
      // ],
    },
    { id: 3, name: 'CSS Mastery', description: 'Become a CSS expert.'
      
     },

    
  ];

  return ( 
    <div className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}/register`} className="register-link">
              Register
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
