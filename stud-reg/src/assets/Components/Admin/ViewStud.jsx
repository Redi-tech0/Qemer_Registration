import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For API requests
import './ViewStud.css';

const ViewStud = () => {
  const [students, setStudents] = useState([]);

  // Fetch students from backend API
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/students'); // API call to backend
//         setStudents(response.data); // Set students data
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       }
//     };

//     fetchStudents();
//   }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="student-list">
      <h2>Registered Students</h2>
      {students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>phoneNumber</th>
              <th>Address</th>
              <th>Has PC</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.address}</td>
                <td>{student.hasPC ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students registered yet.</p>
      )}
    </div>
  );
};

export default ViewStud;
