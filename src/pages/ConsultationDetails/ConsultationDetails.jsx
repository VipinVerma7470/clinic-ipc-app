import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { X } from "lucide-react";
import "./consultationDetails.css";

const ConsultationDetails = () => {
  const location = useLocation();
  const patient = location.state?.patient;

  const visitHistory = [
    {
      visitNo: 5,
      date: "01 Aug 2026",
      doctor: "Dr. Admin",

      vitals: {
        bp: "120/80",
        pulse: "78",
        temp: "98.6°F",
        height: "170 cm",
        weight: "68 Kg",
        bmi: "23.5",
        spo2: "99 %",
      },

      quickNotes:
        "Patient reported mild fever and body pain. General condition stable.",

      complaints: [
        {
          complaint: "Fever",
          duration: "2 Days",
        },
        {
          complaint: "Body Pain",
          duration: "1 Day",
        },
      ],

      medicalHistory: [
        {
          condition: "No major medical history",
          since: "-",
          notes: "No significant history reported.",
        },
      ],

      diagnosis: [
        {
          diagnosis: "Viral Fever",
          icdCode: "A93.8",
          type: "Primary",
          notes: "Mild viral infection",
        },
      ],

      medicines: [
        {
          medicine: "Paracetamol 650",
          type: "Tablet",
          strength: "650 mg",
          dose: "1-0-1",
          frequency: "Twice Daily",
          duration: "5 Days",
          food: "After Food",
          instruction: "Take with water",
        },
        {
          medicine: "Vitamin C",
          type: "Tablet",
          strength: "500 mg",
          dose: "1-0-0",
          frequency: "Once Daily",
          duration: "10 Days",
          food: "After Food",
          instruction: "As advised",
        },
        {
          medicine: "Pantoprazole",
          type: "Tablet",
          strength: "40 mg",
          dose: "1-0-0",
          frequency: "Once Daily",
          duration: "5 Days",
          food: "Before Food",
          instruction: "Take before breakfast",
        },
      ],

      tests: [
        {
          testName: "CBC",
          byWhen: "Before Next Visit",
        },
        {
          testName: "CRP",
          byWhen: "Today",
        },
      ],

      advice:
        "Drink plenty of fluids and take proper rest. Avoid outside food and maintain a healthy diet.",

      followUpDate: "05 Aug 2026",
      followUpNotes: "Review after 5 days or earlier if symptoms worsen.",

      xrayReport: "No X-Ray required for this visit.",

      mriReport: "No MRI required for this visit.",
    },

    {
      visitNo: 4,
      date: "18 Jul 2026",
      doctor: "Dr. Admin",

      vitals: {
        bp: "130/90",
        pulse: "82",
        temp: "99°F",
        height: "170 cm",
        weight: "69 Kg",
        bmi: "23.9",
        spo2: "98 %",
      },

      quickNotes:
        "Patient complained of headache. No other major symptoms reported.",

      complaints: [
        {
          complaint: "Headache",
          duration: "2 Days",
        },
      ],

      medicalHistory: [
        {
          condition: "Migraine",
          since: "2025",
          notes: "Occasional migraine episodes.",
        },
      ],

      diagnosis: [
        {
          diagnosis: "Migraine",
          icdCode: "G43.909",
          type: "Primary",
          notes: "Acute migraine episode",
        },
      ],

      medicines: [
        {
          medicine: "Dolo 650",
          type: "Tablet",
          strength: "650 mg",
          dose: "1-0-1",
          frequency: "Twice Daily",
          duration: "3 Days",
          food: "After Food",
          instruction: "As required",
        },
        {
          medicine: "Sumatriptan",
          type: "Tablet",
          strength: "50 mg",
          dose: "SOS",
          frequency: "As Required",
          duration: "As Required",
          food: "After Food",
          instruction: "For severe headache",
        },
      ],

      tests: [
        {
          testName: "MRI Brain",
          byWhen: "Before Next Visit",
        },
      ],

      advice:
        "Avoid stress, sleep properly and stay hydrated. Avoid prolonged screen exposure.",

      followUpDate: "-",
      followUpNotes: "Follow up if headache persists.",

      xrayReport: "Not required.",

      mriReport: "MRI Brain advised if symptoms persist.",
    },

    {
      visitNo: 3,
      date: "02 Jun 2026",
      doctor: "Dr. Admin",

      vitals: {
        bp: "125/80",
        pulse: "76",
        temp: "98.4°F",
        height: "170 cm",
        weight: "70 Kg",
        bmi: "24.2",
        spo2: "99 %",
      },

      quickNotes:
        "Routine diabetes follow-up. Blood sugar monitoring discussed.",

      complaints: [
        {
          complaint: "Diabetes Follow-up",
          duration: "1 Month",
        },
      ],

      medicalHistory: [
        {
          condition: "Type 2 Diabetes",
          since: "2023",
          notes: "Under regular medication.",
        },
      ],

      diagnosis: [
        {
          diagnosis: "Type 2 Diabetes",
          icdCode: "E11.9",
          type: "Primary",
          notes: "Controlled with medication",
        },
      ],

      medicines: [
        {
          medicine: "Metformin",
          type: "Tablet",
          strength: "500 mg",
          dose: "1-0-1",
          frequency: "Twice Daily",
          duration: "30 Days",
          food: "After Food",
          instruction: "Continue regularly",
        },
        {
          medicine: "Glimepiride",
          type: "Tablet",
          strength: "2 mg",
          dose: "1-0-0",
          frequency: "Once Daily",
          duration: "30 Days",
          food: "Before Food",
          instruction: "Before breakfast",
        },
        {
          medicine: "Vitamin B12",
          type: "Tablet",
          strength: "500 mcg",
          dose: "1-0-0",
          frequency: "Once Daily",
          duration: "30 Days",
          food: "After Food",
          instruction: "Continue as advised",
        },
        {
          medicine: "Calcium",
          type: "Tablet",
          strength: "500 mg",
          dose: "0-0-1",
          frequency: "Once Daily",
          duration: "30 Days",
          food: "After Food",
          instruction: "At night",
        },
      ],

      tests: [
        {
          testName: "HbA1c",
          byWhen: "Before Next Visit",
        },
        {
          testName: "Fasting Blood Sugar",
          byWhen: "Today",
        },
      ],

      advice:
        "Maintain a healthy diet, exercise regularly and monitor blood sugar regularly.",

      followUpDate: "01 Jul 2026",
      followUpNotes: "Bring blood sugar reports during next visit.",

      xrayReport: "Not required.",

      mriReport: "Not required.",
    },
  ];

  const [selectedVisit, setSelectedVisit] = useState(null);

  const openVisitDetails = (visit) => {
    setSelectedVisit(visit);
  };

  const closeVisitDetails = () => {
    setSelectedVisit(null);
  };

  return (
    <div className="cd-page">

      {/* ================= PATIENT HEADER ================= */}

      <div className="cd-patient-header">
        <div className="cd-patient-title">
          <h2>{patient?.name || "Rahul Sharma"}</h2>
          <span>Consultation & Medical History</span>
        </div>

        <div className="cd-patient-grid">

          <div className="cd-patient-info">
            <label>Patient ID</label>
            <span>{patient?.patientId || patient?.id || "PT001"}</span>
          </div>

          <div className="cd-patient-info">
            <label>Age / Gender</label>
            <span>
              {patient?.age || 28} Years /{" "}
              {patient?.gender || "Male"}
            </span>
          </div>

          <div className="cd-patient-info">
            <label>Phone</label>
            <span>
              {patient?.phone || patient?.mobile || "9876543210"}
            </span>
          </div>

          <div className="cd-patient-info">
            <label>Last Visit</label>
            <span>
              {patient?.lastVisit || visitHistory[0].date}
            </span>
          </div>

        </div>
      </div>

      {/* ================= PAST VISITS ================= */}

      <div className="cd-history-wrapper">

        <div className="cd-history-heading">
          <div>
            <h3>Past Visit History</h3>
            <p>Select a visit to view complete consultation details.</p>
          </div>

          <span className="cd-visit-count">
            {visitHistory.length} Visits
          </span>
        </div>

        <div className="cd-history-list">

          {visitHistory.map((visit) => (

            <div
              className="cd-history-card"
              key={visit.visitNo}
            >

              <div className="cd-card-left">

                <div className="cd-card-visit-number">
                  Visit #{visit.visitNo}
                </div>

                <div className="cd-card-date">
                  {visit.date}
                </div>

                <div className="cd-card-doctor">
                  <span>Doctor</span>
                  <strong>{visit.doctor}</strong>
                </div>

              </div>

              <button
                type="button"
                className="cd-view-button"
                onClick={() => openVisitDetails(visit)}
              >
                View Details
              </button>

            </div>

          ))}

        </div>
      </div>

      {/* ================= MODAL ================= */}

      {selectedVisit && (

        <div
          className="cd-modal-overlay"
          onClick={closeVisitDetails}
        >

          <div
            className="cd-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="cd-modal-header">

              <div>
                <div className="cd-modal-visit-row">

                  <h2>
                    Visit #{selectedVisit.visitNo}
                  </h2>

                  <span className="cd-modal-date">
                    {selectedVisit.date}
                  </span>

                </div>

                <p className="cd-modal-doctor">
                  Doctor : <strong>{selectedVisit.doctor}</strong>
                </p>
              </div>

              <button
                type="button"
                className="cd-modal-close"
                onClick={closeVisitDetails}
                title="Close"
              >
                <X size={22} />
              </button>

            </div>

            {/* MODAL BODY */}

            <div className="cd-modal-body">

              {/* ================= VITALS ================= */}

              <div className="cd-modal-section">

                <h3>Vitals</h3>

                <div className="cd-vitals-grid">

                  <div className="cd-vital-box">
                    <label>Blood Pressure</label>
                    <strong>
                      {selectedVisit.vitals.bp || "-"}
                    </strong>
                  </div>

                  <div className="cd-vital-box">
                    <label>Pulse</label>
                    <strong>
                      {selectedVisit.vitals.pulse || "-"}
                    </strong>
                  </div>

                  <div className="cd-vital-box">
                    <label>Temperature</label>
                    <strong>
                      {selectedVisit.vitals.temp || "-"}
                    </strong>
                  </div>

                  <div className="cd-vital-box">
                    <label>Height</label>
                    <strong>
                      {selectedVisit.vitals.height || "-"}
                    </strong>
                  </div>

                  <div className="cd-vital-box">
                    <label>Weight</label>
                    <strong>
                      {selectedVisit.vitals.weight || "-"}
                    </strong>
                  </div>

                  <div className="cd-vital-box">
                    <label>BMI</label>
                    <strong>
                      {selectedVisit.vitals.bmi || "-"}
                    </strong>
                  </div>

                  <div className="cd-vital-box">
                    <label>SpO₂</label>
                    <strong>
                      {selectedVisit.vitals.spo2 || "-"}
                    </strong>
                  </div>

                </div>

              </div>

              {/* ================= QUICK NOTES ================= */}

              <div className="cd-modal-section">

                <h3>Quick Notes</h3>

                <div className="cd-text-box">
                  {selectedVisit.quickNotes || "No quick notes available."}
                </div>

              </div>

              {/* ================= COMPLAINTS ================= */}

              <div className="cd-modal-section">

                <h3>Chief Complaints</h3>

                <div className="cd-complaint-list">

                  {selectedVisit.complaints?.length > 0 ? (

                    selectedVisit.complaints.map(
                      (item, index) => (

                        <div
                          className="cd-complaint-item"
                          key={index}
                        >
                          <div>
                            <label>Complaint</label>
                            <strong>{item.complaint}</strong>
                          </div>

                          <div>
                            <label>Duration</label>
                            <strong>{item.duration}</strong>
                          </div>
                        </div>

                      )
                    )

                  ) : (
                    <span className="cd-empty">
                      No complaints recorded.
                    </span>
                  )}

                </div>

              </div>

              {/* ================= MEDICAL HISTORY ================= */}

              <div className="cd-modal-section">

                <h3>Medical History</h3>

                <div className="cd-history-detail-list">

                  {selectedVisit.medicalHistory?.length > 0 ? (

                    selectedVisit.medicalHistory.map(
                      (item, index) => (

                        <div
                          className="cd-history-detail-item"
                          key={index}
                        >

                          <div>
                            <label>Condition</label>
                            <strong>{item.condition}</strong>
                          </div>

                          <div>
                            <label>Since</label>
                            <strong>{item.since}</strong>
                          </div>

                          <div className="cd-history-note">
                            <label>Notes</label>
                            <span>{item.notes}</span>
                          </div>

                        </div>

                      )
                    )

                  ) : (
                    <span className="cd-empty">
                      No medical history recorded.
                    </span>
                  )}

                </div>

              </div>

              {/* ================= DIAGNOSIS ================= */}

              <div className="cd-modal-section">

                <h3>Diagnosis</h3>

                <div className="cd-diagnosis-list">

                  {selectedVisit.diagnosis?.map(
                    (item, index) => (

                      <div
                        className="cd-diagnosis-item"
                        key={index}
                      >

                        <div className="cd-diagnosis-main">

                          <strong>
                            {item.diagnosis}
                          </strong>

                          <span
                            className={`cd-diagnosis-type ${
                              item.type === "Primary"
                                ? "cd-primary"
                                : "cd-secondary"
                            }`}
                          >
                            {item.type}
                          </span>

                        </div>

                        <div className="cd-diagnosis-meta">

                          <div>
                            <label>ICD Code</label>
                            <span>
                              {item.icdCode || "-"}
                            </span>
                          </div>

                          <div>
                            <label>Notes</label>
                            <span>
                              {item.notes || "-"}
                            </span>
                          </div>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* ================= MEDICINES ================= */}

              <div className="cd-modal-section">

                <h3>Medicines</h3>

                <div className="cd-medicine-table-wrapper">

                  <table className="cd-medicine-table">

                    <thead>
                      <tr>
                        <th>Medicine</th>
                        <th>Type</th>
                        <th>Strength</th>
                        <th>Dose</th>
                        <th>Frequency</th>
                        <th>Duration</th>
                        <th>Food</th>
                        <th>Instruction</th>
                      </tr>
                    </thead>

                    <tbody>

                      {selectedVisit.medicines?.map(
                        (medicine, index) => (

                          <tr key={index}>

                            <td>
                              <strong>
                                {medicine.medicine}
                              </strong>
                            </td>

                            <td>
                              {medicine.type}
                            </td>

                            <td>
                              {medicine.strength}
                            </td>

                            <td>
                              {medicine.dose}
                            </td>

                            <td>
                              {medicine.frequency}
                            </td>

                            <td>
                              {medicine.duration}
                            </td>

                            <td>
                              {medicine.food}
                            </td>

                            <td>
                              {medicine.instruction}
                            </td>

                          </tr>

                        )
                      )}

                    </tbody>

                  </table>

                </div>

              </div>

              {/* ================= TESTS ================= */}

              <div className="cd-modal-section">

                <h3>Tests Requested</h3>

                <div className="cd-test-list">

                  {selectedVisit.tests?.length > 0 ? (

                    selectedVisit.tests.map(
                      (test, index) => (

                        <div
                          className="cd-test-item"
                          key={index}
                        >

                          <div>
                            <label>Test Name</label>
                            <strong>{test.testName}</strong>
                          </div>

                          <div>
                            <label>By When</label>
                            <strong>{test.byWhen}</strong>
                          </div>

                        </div>

                      )
                    )

                  ) : (
                    <span className="cd-empty">
                      No tests requested.
                    </span>
                  )}

                </div>

              </div>

              {/* ================= ADVICE ================= */}

              <div className="cd-modal-section">

                <h3>Advice</h3>

                <div className="cd-text-box cd-advice-box">
                  {selectedVisit.advice || "No advice recorded."}
                </div>

              </div>

              {/* ================= FOLLOW UP ================= */}

              <div className="cd-modal-section">

                <h3>Follow Up</h3>

                <div className="cd-followup-grid">

                  <div className="cd-followup-box">
                    <label>Next Visit Date</label>
                    <strong>
                      {selectedVisit.followUpDate || "-"}
                    </strong>
                  </div>

                  <div className="cd-followup-box cd-followup-notes">
                    <label>Follow Up Notes</label>
                    <span>
                      {selectedVisit.followUpNotes || "-"}
                    </span>
                  </div>

                </div>

              </div>

              {/* ================= X-RAY ================= */}

              <div className="cd-modal-section">

                <h3>X-Ray Reports</h3>

                <div className="cd-report-box">
                  {selectedVisit.xrayReport || "No X-Ray report available."}
                </div>

              </div>

              {/* ================= MRI ================= */}

              <div className="cd-modal-section">

                <h3>MRI</h3>

                <div className="cd-report-box">
                  {selectedVisit.mriReport || "No MRI report available."}
                </div>

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="cd-modal-footer">

              <button
                type="button"
                className="cd-close-button"
                onClick={closeVisitDetails}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default ConsultationDetails;