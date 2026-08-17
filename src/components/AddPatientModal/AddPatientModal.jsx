import React, { useState } from "react";
import "./AddPatientModal.css";

const AddPatientModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    mobile: "",
    alternativeMobile: "",
    age: "",
    gender: "",
    dob: "",
    preferredStatus: "",
    preferredLanguage: "",
    city: "",
    address: "",
    pincode: "",
    maritalStatus: "",
    bloodGroup: "",
    referredBy: "",
    existingId: "",
    aadhaarNumber: "",
    appointmentDate: "",
    appointmentTime: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Yaha baad me IPC call hogi
    // window.electronAPI.createPatient(formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="patient-modal">
        <div className="modal-header">
          <h2>Add Patient</h2>

          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="section-title">Patient Information</div>

          <div className="form-grid">
            <div className="form-group">
              <label>Patient Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="0"
                max="120"
              />
            </div>

            <div className="form-group">
              <label>Alternative Mobile Number</label>
              <input
                type="text"
                name="alternativeMobile"
                value={formData.alternativeMobile}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Preferred Language</label>

              <select
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Hindi</option>
                <option>English</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Address</label>

              <textarea
                rows="3"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Pincode</label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Marital Status</label>

              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>

            <div className="form-group">
              <label>Blood Group</label>

              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div className="form-group">
              <label>Referred By</label>

              <input
                type="text"
                name="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Existing ID</label>

              <input
                type="text"
                name="existingId"
                value={formData.existingId}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Aadhaar Number</label>

              <input
                type="text"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="section-title appointment-title">
            Appointment Details
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Appointment Date</label>

              <input
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Appointment Time</label>

              <input
                type="time"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Purpose</label>

              <textarea
                rows="3"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="save-btn">
              Create Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientModal;
