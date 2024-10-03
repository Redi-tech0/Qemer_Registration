import React, { useState, useEffect } from 'react';
import './CourMgt.css';

const CourMgt = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [editMode, setEditMode] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  // // Fetch courses from backend (you can replace this with actual API call)
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const response = await fetch('/api/courses'); // Replace with actual backend endpoint
  //     const data = await response.json();
  //     setCourses(data);
  //   };
  //   fetchCourses();
  // }, []);  

  // Handle adding a new course
  const handleAddCourse = () => {
    if (newCourse.title && newCourse.description) {
      const createdCourse = { ...newCourse, id: courses.length + 1 };
      setCourses([...courses, createdCourse]);
      setNewCourse({ title: '', description: '' });
    }
  };

  // Handle editing a course
  const handleEditCourse = (course) => {
    setEditMode(true);
    setEditingCourse(course);
    setNewCourse({ title: course.title, description: course.description });
  };

  const handleSaveEdit = () => {
    setCourses(
      courses.map(course =>
        course.id === editingCourse.id ? { ...course, ...newCourse } : course
      )
    );
    setEditMode(false);
    setEditingCourse(null);
    setNewCourse({ title: '', description: '' });
  };

  // Handle deleting a course
  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div classtitle="CourseMgt">
      <h2>Course Management</h2>

      {/* Add / Edit Course Form */}
      <div classtitle="course-form">
        <input
          type="text"
          placeholder="Course title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Course Description"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />
        {editMode ? (
          <button onClick={handleSaveEdit}>Save Changes</button>
        ) : (
          <button onClick={handleAddCourse}>Add Course</button>
        )}
      </div>

      {/* Courses Table */}
      <table classtitle="course-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>
                <button onClick={() => handleEditCourse(course)}>Edit</button>
                <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourMgt;
