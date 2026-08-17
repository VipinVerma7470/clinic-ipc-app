import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./appointment.css";
import AddPatientModal from "../../components/AddPatientModal/AddPatientModal";

const Appointment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const patient = location.state?.patient;
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [openStatusId, setOpenStatusId] = useState(null);
  const dateInputRef = useRef(null);

  const [appointments, setAppointments] = useState([
   {
  id: "PT001",
  name: "Rahul Sharma",
  age: 28,
  gender: "Male",
  mobile: "9876543210",
  recentVisit: "05 Aug 2026",
  visitCount: 2,
  time: "10:30 AM",
  status: "Waiting",
  purpose: "Fever",
  appointmentDate: "2026-08-12",
},
{
  id: "PT002",
  name: "Priya Verma",
  age: 34,
  gender: "Female",
  mobile: "9876543210",
  recentVisit: "01 Aug 2026",
  visitCount: 5,
  time: "11:15 AM",
  status: "Complete",
  purpose: "Follow Up",
  appointmentDate: "2026-08-12",
},
{
  id: "PT003",
  name: "Rohit Jain",
  age: 40,
  gender: "Male",
  mobile: "9876543210",
  recentVisit: "-",
  visitCount: 1,
  time: "12:00 PM",
  status: "Ongoing",
  purpose: "Headache",
  appointmentDate: "2026-08-12",
},
  ]);
  const handleStatusChange = (id, newStatus) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const formatDate = (date) => {
    if (!date) return "01/01/2026";

    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
  };
  const handleTodayClick = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  setSelectedDate(`${year}-${month}-${day}`);
};
  const pendingCount = appointments.filter(
    (item) => item.status !== "Completed",
  ).length;

  const completedCount = appointments.filter(
    (item) => item.status === "Completed",
  ).length;

 const filteredAppointments = appointments.filter((item) => {
  const matchesSearch =
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.id.toLowerCase().includes(search.toLowerCase());

  const matchesStatus =
    activeFilter === "All"
      ? true
      : activeFilter === "Pending"
        ? item.status !== "Complete"
        : item.status === "Complete";

  const matchesDate =
    !selectedDate || item.appointmentDate === selectedDate;

  return matchesSearch && matchesStatus && matchesDate;
});

  return (
    <>
      <div className="appointment-page">
        <div className="appointment-header">
          <div>
            <h2>Appointments</h2>
            <p>Manage patient appointments</p>
          </div>

          <button className="add-patient-btn" onClick={() => setIsOpen(true)}>
            + Add Patient
          </button>
        </div>

       <div className="appointment-filter">
  <input
    type="text"
    placeholder="Search Patient..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
       <div className="appointment-status-row">

  <div className="appointment-status-cards">

    {/* ALL APPOINTMENTS */}
    <button
      className="status-summary-card"
      onClick={() => setActiveFilter("All")}
    >
      <span className="status-card-title">
        All Appointments
      </span>

      <span className="status-card-count">
        {appointments.length}
      </span>
    </button>


    {/* PENDING */}
    <button
      className="status-summary-card"
      onClick={() => setActiveFilter("Pending")}
    >
      <span className="status-card-title">
        Pending
      </span>

      <span className="status-card-count">
        {
          appointments.filter(
            (item) => item.status !== "Complete"
          ).length
        }
      </span>
    </button>


    {/* COMPLETED */}
    <button
      className="status-summary-card"
      onClick={() => setActiveFilter("Completed")}
    >
      <span className="status-card-title">
        Completed
      </span>

      <span className="status-card-count">
        {
          appointments.filter(
            (item) => item.status === "Complete"
          ).length
        }
      </span>
    </button>

  </div>


  {/* DATE FILTER */}

 <div className="appointment-date-filter">

  <button
    type="button"
    className="date-picker-btn"
    onClick={() => dateInputRef.current?.showPicker()}
  >
    <span
      className="date-today"
      onClick={(e) => {
        e.stopPropagation();
        handleTodayClick();
      }}
    >
      Today
    </span>

    <span className="date-divider"></span>

    <span>
      {formatDate(selectedDate)}
    </span>

    <span className="calendar-icon">
      📅
    </span>
  </button>

  <input
    ref={dateInputRef}
    type="date"
    value={selectedDate}
    onChange={(e) => setSelectedDate(e.target.value)}
    className="hidden-date-input"
  />

</div>

</div>
        <div className="appointment-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>

                <th>Name / Age / Gender</th>

                <th>Visit</th>

                <th>Recent Visit</th>

                <th>Visit Count</th>

                <th>Time</th>

                <th>Status</th>

                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  <td>
                    <strong>{item.name}</strong>
                    <br />
                    {item.age} Years • {item.gender}
                  </td>

                  <td>
                    <button
                      className="visit-btn"
                      onClick={() =>
                        navigate("/visit", {
                          state: {
                            patient: item,
                          },
                        })
                      }
                    >
                      Visit
                    </button>
                  </td>

                  <td>{item.recentVisit}</td>

                  <td>{item.visitCount}</td>

                  <td>{item.time}</td>

                  <td>
                    {item.status === "Complete" ? (
                      <span className="status-select complete">Complete</span>
                    ) : (
                      <select
                        className={`status-select ${item.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        value={item.status}
                        onChange={(e) =>
                          handleStatusChange(item.id, e.target.value)
                        }
                      >
                        <option value="Booked">Booked</option>
                        <option value="Pending">Pending</option>
                        <option value="Ongoing">Ongoing</option>
                      </select>
                    )}
                  </td>

                  <td>{item.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AddPatientModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default Appointment;
