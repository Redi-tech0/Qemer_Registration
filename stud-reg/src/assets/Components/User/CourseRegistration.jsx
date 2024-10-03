import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseRegistration.css';

function CourseRegistration() {
  const { coursecourseID } = useParams(); // Get the coursecourseID from URL

  // Replace this with fetched data
  const courses = [
    {
      courseID: 1,
      name: 'React Basics',
      description: 'Learn the basics of React.',
      schedule: [
        { day: 'Monday', time: '10:00 AM - 12:00 PM', type: 'physical' },
        { day: 'Wednesday', time: '2:00 PM - 4:00 PM', type: 'physical' },
        { day: 'Monday', time: '6:00 PM - 8:00 PM', type: 'online' }, // Online session
        { day: 'Tuesday', time: '6:00 PM - 8:00 PM', type: 'online' }, // Online session
      ],
    },
    {
      courseID: 2,
      name: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript.',
      schedule: [
        { day: 'Sunday', time: '11:00 AM - 1:00 PM', type: 'physical' },
        { day: 'Thursday', time: '3:00 PM - 5:00 PM', type: 'physical' },
        { day: 'Wednesday', time: '6:00 PM - 8:00 PM', type: 'online' }, // Online session
      ],
    },
    {
      courseID: 3,
      name: 'CSS Mastery',
      description: 'Become a CSS expert.',
      schedule: [
        { day: 'Monday', time: '1:00 PM - 3:00 PM', type: 'physical' },
        { day: 'FrcourseIDay', time: '9:00 AM - 11:00 AM', type: 'physical' },
        { day: 'Saturday', time: '10:00 AM - 12:00 PM', type: 'online' }, // Online session
      ],
    },
  ];

  // Find the course based on the coursecourseID from URL
  const selectedCourse = courses.find((course) => course.courseID === parseInt(coursecourseID));

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    hasPC: false,
    sessionType: 'online', // Default to online
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('You have been registered for this course!');
  };

  return (
    <div className="registration-container">
      {/* Display Course Schedule */}
      <div className="course-schedule">
        <h2>Schedule for {selectedCourse.name}</h2>
        <ul>
          {selectedCourse.schedule.map((slot, index) => (
            <li key={index}>
              {slot.day}: {slot.time} ({slot.type.charAt(0).toUpperCase() + slot.type.slice(1)}) {/* Capitalize type */}
            </li>
          ))}
        </ul>
      </div>

      {/* Registration Form */}
      <div className="registration-form">
        <h2>Register for {selectedCourse.name}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Do you have a PC?
            <input
              type="checkbox"
              name="hasPC"
              checked={formData.hasPC}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Session Type:
            <label>
              <input
                type="radio"
                name="sessionType"
                value="online"
                checked={formData.sessionType === 'online'}
                onChange={handleChange}
              />
              Online
            </label>
            <label>
              <input
                type="radio"
                name="sessionType"
                value="physical"
                checked={formData.sessionType === 'physical'}
                onChange={handleChange}
              />
              Physical
            </label>
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default CourseRegistration;
