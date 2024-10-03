import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [scheduleForm, setScheduleForm] = useState({
    courseID: '',
    sessionType: 'Online',
    startTime: '',
    endTime: '',
    days: [],
  });

  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScheduleForm({ ...scheduleForm, [name]: value });
  }; 

  const handleDayChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setScheduleForm({ ...scheduleForm, days: [...scheduleForm.days, value] });
    } else {
      setScheduleForm({
        ...scheduleForm,
        days: scheduleForm.days.filter((day) => day !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Edit existing schedule
      const updatedSchedules = schedules.map((schedule, index) =>
        index === editingIndex ? scheduleForm : schedule
      );
      setSchedules(updatedSchedules);
      setEditingIndex(null);
    } else {
      // Add new schedule
      setSchedules([...schedules, scheduleForm]);
    }
    // Reset form
    setScheduleForm({
      courseID: '',
      sessionType: 'In-Person',
      startTime: '',
      endTime: '',
      days: [],
    });
  };

  const handleEdit = (index) => {
    setScheduleForm(schedules[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedSchedules = schedules.filter((_, i) => i !== index);
    setSchedules(updatedSchedules);
  };

  return (
    <div className="schedule-management">
      <h2>Manage Course Schedules</h2>
      <form onSubmit={handleSubmit} className="schedule-form">
        <input
          type="text"
          name="courseName"
          value={scheduleForm.courseName}
          onChange={handleInputChange}
          placeholder="Course Name"
          required
        />

        <select
          name="sessionType"
          value={scheduleForm.sessionType}
          onChange={handleInputChange}
        >
          <option value="Online">Online</option>
          <option value="In-Person">In-Person</option>
        </select>

        <input
          type="time"
          name="startTime"
          value={scheduleForm.startTime}
          onChange={handleInputChange}
          placeholder="Start Time"
          required
        />

        <input
          type="time"
          name="endTime"
          value={scheduleForm.endTime}
          onChange={handleInputChange}
          placeholder="End Time"
          required
        />

        <div className="days-selection">
          <label>Select days:</label>
          <label>
            <input
              type="checkbox"
              value="Monday"
              checked={scheduleForm.days.includes('Monday')}
              onChange={handleDayChange}
            />
            Monday
          </label>
          <label>
            <input
              type="checkbox"
              value="Tuesday"
              checked={scheduleForm.days.includes('Tuesday')}
              onChange={handleDayChange}
            />
            Tuesday
          </label>
          <label>
            <input
              type="checkbox"
              value="Wednesday"
              checked={scheduleForm.days.includes('Wednesday')}
              onChange={handleDayChange}
            />
            Wednesday
          </label>
          <label>
            <input
              type="checkbox"
              value="Thursday"
              checked={scheduleForm.days.includes('Thursday')}
              onChange={handleDayChange}
            />
            Thursday
          </label>
          <label>
            <input
              type="checkbox"
              value="Friday"
              checked={scheduleForm.days.includes('Friday')}
              onChange={handleDayChange}
            />
            Friday
          </label>
          <label>
            <input
              type="checkbox"
              value="Saturday"
              checked={scheduleForm.days.includes('Saturday')}
              onChange={handleDayChange}
            />
            Saturday
          </label>
          <label>
            <input
              type="checkbox"
              value="Sunday"
              checked={scheduleForm.days.includes('Sunday')}
              onChange={handleDayChange}
            />
            Sunday
          </label>
        </div>

        <button type="submit">
          {editingIndex !== null ? 'Update Schedule' : 'Add Schedule'}
        </button>
      </form>

      {/* Table of Schedules */}
      <div className="schedule-list">
        <h3>Scheduled Courses</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Session Type</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>days</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.courseName}</td>
                <td>{schedule.sessionType}</td>
                <td>{schedule.startTime}</td>
                <td>{schedule.endTime}</td>
                <td>{schedule.days.join(', ')}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
