import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back, Doctor 👋</p>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Today's Appointments</h3>
          <h1>24</h1>
          <span>+5 from yesterday</span>
        </div>

        <div className="stat-card">
          <h3>Waiting Patients</h3>
          <h1>8</h1>
          <span>Currently Waiting</span>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <h1>16</h1>
          <span>Consultations Done</span>
        </div>

        <div className="stat-card">
          <h3>Total Patients</h3>
          <h1>325</h1>
          <span>Registered Patients</span>
        </div>
      </div>

      <div className="appointment-section">
        <div className="table-header">
          <h3>Today's Appointments</h3>

          <input type="text" placeholder="Search Patient..." />
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>Patient</th>

              <th>Age</th>

              <th>Gender</th>

              <th>Time</th>

              <th>Status</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>001</td>

              <td>Rahul Sharma</td>

              <td>28</td>

              <td>Male</td>

              <td>10:30 AM</td>

              <td>
                <span className="waiting">Waiting</span>
              </td>

              <td>
                <button>Start Visit</button>
              </td>
            </tr>

            <tr>
              <td>002</td>

              <td>Priya Verma</td>

              <td>34</td>

              <td>Female</td>

              <td>11:00 AM</td>

              <td>
                <span className="completed">Completed</span>
              </td>

              <td>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
