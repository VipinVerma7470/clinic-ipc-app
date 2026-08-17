import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./consultation.css";

const Consultation = () => {
  const navigate = useNavigate();

  const [fromDate, setFromDate] = useState("2026-07-01");
  const [toDate, setToDate] = useState("2026-08-01");

  const consultations = [
    {
      id: "517",
      patientId: "PT001",
      name: "Madhhu Bai",
      age: 50,
      gender: "Female",
      phone: "9131911976",
      lastVisit: "01 Aug 2026",
    },
    {
      id: "518",
      patientId: "PT002",
      name: "Kailash Narayan",
      age: 62,
      gender: "Male",
      phone: "9165857649",
      lastVisit: "01 Aug 2026",
    },
    {
      id: "519",
      patientId: "PT003",
      name: "Sapna Jain",
      age: 37,
      gender: "Female",
      phone: "7828944125",
      lastVisit: "31 Jul 2026",
    },
  ];

  return (
    <div className="consultation-page">
      <div className="page-header">
        <div>
          <h2>Consultations</h2>

          <p>Patient Consultation History</p>
        </div>
      </div>

      <div className="consultation-filter">
        <div>
          <label>From</label>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </div>

        <div>
          <label>To</label>

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
        </div>

        <button className="go-btn">Go</button>
      </div>

      <div className="consultation-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>

              <th>Patient Name</th>

              <th>Phone</th>

              <th>Last Visit</th>

              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {consultations.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>

                <td>
                  <strong>{item.name}</strong>
                  <br />
                  {item.age} Years / {item.gender}
                </td>

                <td>{item.phone}</td>

                <td>{item.lastVisit}</td>

                <td>
                  <button
                    className="view-pad-btn"
                    onClick={() =>
                      navigate("/consultation-details", {
                        state: {
                          patient: item,
                        },
                      })
                    }
                  >
                    View Pad
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Consultation;
