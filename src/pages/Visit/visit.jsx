import React from "react";
import "./visit.css";
import { useState } from "react";
import VoiceInput from "../../components/VoiceInput/VoiceInput"; 
import { useLocation } from "react-router-dom";
import { Pencil, Eraser, FileText, Undo2 } from "lucide-react";

const Visit = () => {
  const location = useLocation();

  const patient = location.state?.patient;
 const pastVisits = [
  {
    id: 1,
    visitNo: 5,
    date: "01 Aug 2026",
    doctor: "Dr. Amit Sharma",

    vitals: {
      bloodPressure: "120 / 80",
      pulse: "72 bpm",
      temperature: "98.6 °F",
      height: "170 cm",
      weight: "65 kg",
      bmi: "22.5",
      spo2: "99 %",
    },

    quickNotes:
      "Patient reported mild fever and cough for the last 3 days. No breathing difficulty reported.",

    medicines: [
      {
        medicine: "Paracetamol",
        type: "Tablet",
        strength: "500 mg",
        dose: "1-0-1",
        frequency: "Twice Daily",
        duration: "5 Days",
        food: "After Food",
        instruction: "Take after meals",
      },
      {
        medicine: "Cetirizine",
        type: "Tablet",
        strength: "10 mg",
        dose: "0-0-1",
        frequency: "Once Daily",
        duration: "5 Days",
        food: "After Food",
        instruction: "Take at night",
      },
      {
        medicine: "Cough Syrup",
        type: "Syrup",
        strength: "100 ml",
        dose: "2 tsp",
        frequency: "Twice Daily",
        duration: "5 Days",
        food: "After Food",
        instruction: "Take with measuring cup",
      },
    ],

    tests: [
      {
        testName: "CBC",
        byWhen: "Today",
      },
      {
        testName: "Chest X-Ray",
        byWhen: "Before Next Visit",
      },
    ],

    advice:
      "Take adequate rest and drink plenty of fluids. Avoid cold beverages and follow the prescribed medicines regularly.",

    followUp: {
      date: "05 Aug 2026",
      notes: "Follow up after 5 days or earlier if symptoms worsen.",
    },

    xrayReport:
      "Chest X-Ray shows no significant abnormality. Mild peribronchial thickening noted.",

    mriReport: "No MRI performed during this visit.",
  },

  {
    id: 2,
    visitNo: 4,
    date: "18 Jul 2026",
    doctor: "Dr. Amit Sharma",

    vitals: {
      bloodPressure: "118 / 78",
      pulse: "76 bpm",
      temperature: "98.4 °F",
      height: "170 cm",
      weight: "65 kg",
      bmi: "22.5",
      spo2: "99 %",
    },

    quickNotes:
      "Patient complained of headache. Symptoms were intermittent and improved with rest.",

    medicines: [
      {
        medicine: "Sumatriptan",
        type: "Tablet",
        strength: "50 mg",
        dose: "SOS",
        frequency: "As Required",
        duration: "5 Days",
        food: "After Food",
        instruction: "Take when headache occurs",
      },
      {
        medicine: "Paracetamol",
        type: "Tablet",
        strength: "500 mg",
        dose: "1-0-1",
        frequency: "Twice Daily",
        duration: "3 Days",
        food: "After Food",
        instruction: "Take after meals",
      },
    ],

    tests: [
      {
        testName: "CBC",
        byWhen: "Today",
      },
    ],

    advice:
      "Maintain proper sleep schedule and avoid prolonged screen exposure.",

    followUp: {
      date: "-",
      notes: "Follow up if headache persists or worsens.",
    },

    xrayReport: "No X-Ray performed during this visit.",

    mriReport: "MRI not required.",
  },

  {
    id: 3,
    visitNo: 3,
    date: "02 Jun 2026",
    doctor: "Dr. Amit Sharma",

    vitals: {
      bloodPressure: "125 / 82",
      pulse: "80 bpm",
      temperature: "98.2 °F",
      height: "170 cm",
      weight: "66 kg",
      bmi: "22.8",
      spo2: "98 %",
    },

    quickNotes:
      "Routine diabetes follow-up. Blood sugar levels reviewed and medication continued.",

    medicines: [
      {
        medicine: "Metformin",
        type: "Tablet",
        strength: "500 mg",
        dose: "1-0-1",
        frequency: "Twice Daily",
        duration: "30 Days",
        food: "After Food",
        instruction: "Take regularly",
      },
      {
        medicine: "Glimepiride",
        type: "Tablet",
        strength: "1 mg",
        dose: "1-0-0",
        frequency: "Once Daily",
        duration: "30 Days",
        food: "Before Food",
        instruction: "Take before breakfast",
      },
      {
        medicine: "Vitamin D3",
        type: "Tablet",
        strength: "60K",
        dose: "1-0-0",
        frequency: "Once Weekly",
        duration: "4 Weeks",
        food: "After Food",
        instruction: "Take once a week",
      },
      {
        medicine: "Multivitamin",
        type: "Tablet",
        strength: "1 Tablet",
        dose: "0-0-1",
        frequency: "Once Daily",
        duration: "30 Days",
        food: "After Food",
        instruction: "Take after dinner",
      },
    ],

    tests: [
      {
        testName: "HbA1c",
        byWhen: "Before Next Visit",
      },
      {
        testName: "Fasting Blood Sugar",
        byWhen: "Before Next Visit",
      },
    ],

    advice:
      "Continue regular medication, maintain a balanced diet and exercise regularly.",

    followUp: {
      date: "01 Jul 2026",
      notes: "Review blood sugar and HbA1c reports during next visit.",
    },

    xrayReport: "No X-Ray performed during this visit.",

    mriReport: "No MRI performed during this visit.",
  },
];

  const [complaints, setComplaints] = useState([
    {
      complaint: "",
      duration: "",
    },
  ]);
  const [tests, setTests] = useState([
    {
      testName: "",
      byWhen: "",
    },
  ]);
  const [selectedVisit, setSelectedVisit] = useState(null);
  const [advice, setAdvice] = useState("");
  const [quickNotes, setQuickNotes] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [followUpNotes, setFollowUpNotes] = useState("");
  const [xrayReport, setXrayReport] = useState("");
  const [mriReport, setMriReport] = useState("");
  const [diagnosis, setDiagnosis] = useState([
    {
      diagnosis: "",
      icdCode: "",
      type: "Primary",
      notes: "",
    },
  ]);
  const [history, setHistory] = useState([
    {
      condition: "",
      since: "",
      notes: "",
    },
  ]);
  const [medicines, setMedicines] = useState([
    {
      medicine: "",
      type: "Tablet",
      strength: "",
      dose: "",
      frequency: "",
      duration: "",
      route: "Oral",
      food: "After Food",
      instruction: "",
    },
  ]);

  const handleComplaintChange = (index, field, value) => {
    const updated = [...complaints];
    updated[index][field] = value;
    setComplaints(updated);
  };

  const addComplaint = () => {
    setComplaints([
      ...complaints,
      {
        complaint: "",
        duration: "",
      },
    ]);
  };

  const removeComplaint = (index) => {
    const updated = complaints.filter((_, i) => i !== index);
    setComplaints(updated);
  };

  const handleHistoryChange = (index, field, value) => {
    const updated = [...history];
    updated[index][field] = value;
    setHistory(updated);
  };

  const addHistory = () => {
    setHistory([
      ...history,
      {
        condition: "",
        since: "",
        notes: "",
      },
    ]);
  };

  const removeHistory = (index) => {
    setHistory(history.filter((_, i) => i !== index));
  };

  const handleDiagnosisChange = (index, field, value) => {
    const updated = [...diagnosis];
    updated[index][field] = value;
    setDiagnosis(updated);
  };

  const addDiagnosis = () => {
    setDiagnosis([
      ...diagnosis,
      {
        diagnosis: "",
        icdCode: "",
        type: "Primary",
        notes: "",
      },
    ]);
  };

  const removeDiagnosis = (index) => {
    const updated = diagnosis.filter((_, i) => i !== index);
    setDiagnosis(updated);
  };

  const handleMedicineChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };
  const handleTestChange = (index, field, value) => {
    const updatedTests = [...tests];

    updatedTests[index][field] = value;

    setTests(updatedTests);
  };

  const addTest = () => {
    setTests([
      ...tests,
      {
        testName: "",
        byWhen: "",
      },
    ]);
  };

  const removeTest = (index) => {
    const updatedTests = tests.filter((_, i) => i !== index);

    setTests(updatedTests);
  };

  const addMedicine = () => {
    setMedicines([
      ...medicines,
      {
        medicine: "",
        type: "Tablet",
        strength: "",
        dose: "",
        frequency: "",
        duration: "",
        route: "Oral",
        food: "After Food",
        instruction: "",
      },
    ]);
  };

  const removeMedicine = (index) => {
    const updated = medicines.filter((_, i) => i !== index);
    setMedicines(updated);
  };
  return (
    <div className="visit-page">
      {/* Header */}

      <div className="visit-topbar">
        <div>
          <h2>Patient Visit</h2>

          <p>Consultation & Medical Record</p>
        </div>

        <div className="visit-top-buttons">
          <button className="secondary-btn">Load Template</button>

          <button className="primary-btn">Save Template</button>

          <button className="danger-btn">Clear All</button>
        </div>
      </div>

      {/* Patient Card */}

      <div className="patient-card">
        <div className="patient-avatar">R</div>

        <div className="patient-details">
          <div className="patient-name-row">
            <h3>{patient?.name}</h3>

            <span className="visit-badge">Visit #{patient?.visitCount}</span>
          </div>

          <div className="patient-info-grid">
            <div>
              <label>Patient ID</label>

              <span>{patient?.id}</span>
            </div>

            <div>
              <span>
                {patient?.age} Years / {patient?.gender}
              </span>

              {/* <span>28 Years / Male</span> */}
            </div>

            <div>
              <span>{patient?.mobile}</span>

              {/* <span>9876543210</span> */}
            </div>

            <div>
              <label>Appointment</label>

              <span>
                {patient?.appointmentDate} • {patient?.time}
              </span>
            </div>

            <div>
              <span
                className={`status ${patient?.status
                  ?.toLowerCase()
                  ?.replace(" ", "-")}`}
              >
                {patient?.status}
              </span>

              {/* <span className="status waiting">Waiting</span> */}
            </div>
          </div>
        </div>
      </div>

      {/* Next Step */}

      <div className="section-placeholder">
        {/* ================= VITALS ================= */}

        <div className="visit-section">
          <div className="section-header">
            <h3>Vitals</h3>

            {/* <button className="template-btn">💾 Save Template</button> */}
          </div>

          <div className="vitals-grid">
            <div className="input-group">
              <label>Blood Pressure</label>
              <input type="text" placeholder="120 / 80" />
            </div>

            <div className="input-group">
              <label>Pulse</label>
              <input type="text" placeholder="72 bpm" />
            </div>

            <div className="input-group">
              <label>Temperature</label>
              <input type="text" placeholder="98.6 °F" />
            </div>

            {/* <div className="input-group">
              <label>Respiratory Rate</label>
              <input type="text" placeholder="18 / min" />
            </div> */}

            <div className="input-group">
              <label>Height</label>
              <input type="text" placeholder="170 cm" />
            </div>

            <div className="input-group">
              <label>Weight</label>
              <input type="text" placeholder="65 kg" />
            </div>

            <div className="input-group">
              <label>BMI</label>
              <input type="text" placeholder="22.5" />
            </div>

            <div className="input-group">
              <label>SpO₂</label>
              <input type="text" placeholder="99 %" />
            </div>

            {/* <div className="input-group">
              <label>Waist</label>
              <input type="text" placeholder="80 cm" />
            </div>

            <div className="input-group">
              <label>Hip</label>
              <input type="text" placeholder="92 cm" />
            </div> */}

            {/* <div className="input-group full-width">
              <label>Vitals Notes</label>

              <textarea
                rows="3"
                placeholder="Enter additional observations..."
              ></textarea>
            </div> */}
          </div>
        </div>

        {/* ================= QUICK NOTES ================= */}

        <div className="visit-section">
          <div className="section-header">
            <h3>Quick Notes</h3>

            <div className="report-icons">
              <button className="icon-btn" title="Edit">
                <Pencil size={18} />
              </button>

              <button
                className="icon-btn"
                title="Clear"
                onClick={() => setQuickNotes("")}
              >
                <Eraser size={18} />
              </button>

              <button className="icon-btn" title="Save Template">
                <FileText size={18} />
              </button>

              <button
                className="icon-btn"
                title="Undo"
                onClick={() => setQuickNotes("")}
              >
                <Undo2 size={18} />
              </button>
            </div>
          </div>

         <div className="report-input-wrapper">
  <textarea
    rows="6"
    placeholder="Write clinical notes, observations or important information..."
    value={quickNotes}
    onChange={(e) => setQuickNotes(e.target.value)}
  />

  <VoiceInput
    value={quickNotes}
    onChange={setQuickNotes}
  />
</div>

          <div className="notes-info">
            <span>Characters: {quickNotes.length}</span>
            <span>Templates Available</span>
          </div>
        </div>
        {/* ================= COMPLAINTS ================= */}

        {/* <div className="visit-section">
          <div className="section-header">
            <h3>Chief Complaints</h3>

            <div className="section-actions">
              <button className="load-template-btn">Load Template</button>

              <button className="template-btn">💾 Save Template</button>
            </div>
          </div>

          <div className="complaints-container">
            {complaints.map((item, index) => (
              <div className="complaint-row" key={index}>
                <input
                  type="text"
                  placeholder="Complaint"
                  value={item.complaint}
                  onChange={(e) =>
                    handleComplaintChange(index, "complaint", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Duration"
                  value={item.duration}
                  onChange={(e) =>
                    handleComplaintChange(index, "duration", e.target.value)
                  }
                />

                <button
                  className="delete-btn"
                  onClick={() => removeComplaint(index)}
                >
                  ✕
                </button>
              </div>
            ))}

            <button className="add-row-btn" onClick={addComplaint}>
              + Add Complaint
            </button>
          </div>
        </div> */}

        {/* ================= HISTORY ================= */}

        {/* <div className="visit-section">
          <div className="section-header">
            <h3>Medical History</h3>

            <div className="section-actions">
              <button className="load-template-btn">Load Template</button>

              <button className="template-btn">💾 Save Template</button>
            </div>
          </div>

          <div className="history-container">
            {history.map((item, index) => (
              <div className="history-row" key={index}>
                <input
                  type="text"
                  placeholder="Condition (Diabetes, Asthma...)"
                  value={item.condition}
                  onChange={(e) =>
                    handleHistoryChange(index, "condition", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Since"
                  value={item.since}
                  onChange={(e) =>
                    handleHistoryChange(index, "since", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Notes"
                  value={item.notes}
                  onChange={(e) =>
                    handleHistoryChange(index, "notes", e.target.value)
                  }
                />

                <button
                  className="delete-btn"
                  onClick={() => removeHistory(index)}
                >
                  ✕
                </button>
              </div>
            ))}

            <button className="add-row-btn" onClick={addHistory}>
              + Add History
            </button>
          </div>
        </div> */}
        {/* ================= DIAGNOSIS ================= */}

        {/* <div className="visit-section">
          <div className="section-header">
            <h3>Diagnosis</h3>

            <div className="section-actions">
              <button className="load-template-btn">Load Template</button>

              <button className="template-btn">💾 Save Template</button>
            </div>
          </div>

          <div className="diagnosis-container">
            {diagnosis.map((item, index) => (
              <div className="diagnosis-row" key={index}>
                <input
                  type="text"
                  placeholder="Diagnosis"
                  value={item.diagnosis}
                  onChange={(e) =>
                    handleDiagnosisChange(index, "diagnosis", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="ICD Code"
                  value={item.icdCode}
                  onChange={(e) =>
                    handleDiagnosisChange(index, "icdCode", e.target.value)
                  }
                />

                <select
                  value={item.type}
                  onChange={(e) =>
                    handleDiagnosisChange(index, "type", e.target.value)
                  }
                >
                  <option>Primary</option>
                  <option>Secondary</option>
                </select>

                <input
                  type="text"
                  placeholder="Notes"
                  value={item.notes}
                  onChange={(e) =>
                    handleDiagnosisChange(index, "notes", e.target.value)
                  }
                />

                <button
                  className="delete-btn"
                  onClick={() => removeDiagnosis(index)}
                >
                  ✕
                </button>
              </div>
            ))}

            <button className="add-row-btn" onClick={addDiagnosis}>
              + Add Diagnosis
            </button>
          </div>
        </div> */}

        {/* ================= MEDICINES ================= */}

        <div className="visit-section">
          <div className="section-header">
            <h3>Medicines</h3>

            <div className="section-actions">
              <button className="load-template-btn">Load Template</button>

              <button className="template-btn">💾 Save Template</button>
            </div>
          </div>

          <div className="medicine-table">
            <table>
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

                  <th></th>
                </tr>
              </thead>

              <tbody>
                {medicines.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="text"
                        placeholder="Medicine Name"
                        value={item.medicine}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "medicine",
                            e.target.value,
                          )
                        }
                      />
                    </td>

                    <td>
                      <select
                        value={item.type}
                        onChange={(e) =>
                          handleMedicineChange(index, "type", e.target.value)
                        }
                      >
                        <option>Tablet</option>
                        <option>Capsule</option>
                        <option>Syrup</option>
                        <option>Injection</option>
                        <option>Cream</option>
                        <option>Ointment</option>
                        <option>Drops</option>
                        <option>Powder</option>
                        <option>Other</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="Medicine"
                        value={item.medicine}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "medicine",
                            e.target.value,
                          )
                        }
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="500 mg"
                        value={item.strength}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "strength",
                            e.target.value,
                          )
                        }
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="1-0-1"
                        value={item.dose}
                        onChange={(e) =>
                          handleMedicineChange(index, "dose", e.target.value)
                        }
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="Twice Daily"
                        value={item.frequency}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "frequency",
                            e.target.value,
                          )
                        }
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="5 Days"
                        value={item.duration}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "duration",
                            e.target.value,
                          )
                        }
                      />
                    </td>

                    <td>
                      <select
                        value={item.food}
                        onChange={(e) =>
                          handleMedicineChange(index, "food", e.target.value)
                        }
                      >
                        <option>Before Food</option>
                        <option>After Food</option>
                        <option>With Food</option>
                      </select>
                    </td>

                    <td>
                      <input
                        type="text"
                        placeholder="Instruction"
                        value={item.instruction}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "instruction",
                            e.target.value,
                          )
                        }
                      />
                    </td>

                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => removeMedicine(index)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="add-row-btn" onClick={addMedicine}>
              + Add Medicine
            </button>
          </div>
        </div>
        <div className="visit-section">
          <div className="section-header">
            <h3>Tests Requested</h3>

            <div className="section-actions">
              <button className="load-template-btn">Load Template</button>

              <button className="template-btn">💾 Save Template</button>
            </div>
          </div>

          <div className="test-table">
            <table>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>By When</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {tests.map((item, index) => (
                  <tr key={index}>
                    {/* Test Name */}
                    <td>
                      <input
                        type="text"
                        placeholder="Test Name"
                        value={item.testName}
                        onChange={(e) =>
                          handleTestChange(index, "testName", e.target.value)
                        }
                      />
                    </td>

                    {/* By When */}
                    <td>
                      <select
                        value={item.byWhen}
                        onChange={(e) =>
                          handleTestChange(index, "byWhen", e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Before Next Visit">
                          Before Next Visit
                        </option>
                      </select>
                    </td>

                    {/* Delete */}
                    <td>
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => removeTest(index)}
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button type="button" className="add-row-btn" onClick={addTest}>
              + Add Test
            </button>
          </div>
        </div>

        {/* ================= ADVICE ================= */}

        <div className="visit-section">
          <div className="section-header">
            <h3>Advice</h3>

            <div className="report-icons">
              <button className="icon-btn" title="Edit">
                <Pencil size={18} />
              </button>

              <button
                className="icon-btn"
                title="Clear"
                onClick={() => setAdvice("")}
              >
                <Eraser size={18} />
              </button>

              <button className="icon-btn" title="Save Template">
                <FileText size={18} />
              </button>

              <button
                className="icon-btn"
                title="Undo"
                onClick={() => setAdvice("")}
              >
                <Undo2 size={18} />
              </button>
            </div>
          </div>

         <div className="report-input-wrapper">
  <textarea
    rows="6"
    placeholder="Enter advice for patient..."
    value={advice}
    onChange={(e) => setAdvice(e.target.value)}
  />

  <VoiceInput
    value={advice}
    onChange={setAdvice}
  />
</div>

          <div className="notes-info">
            <span>Characters: {advice.length}</span>
            <span>Templates Available</span>
          </div>
        </div>
        {/* ================= FOLLOW UP ================= */}

        <div className="visit-section">
          <div className="section-header">
            <h3>Follow Up</h3>
          </div>

          <div className="followup-grid">
            <div className="input-group">
              <label>Next Visit Date</label>

              <input
                type="date"
                value={followUpDate}
                onChange={(e) => setFollowUpDate(e.target.value)}
              />
            </div>

            <div className="input-group full-width">
              <label>Follow Up Notes</label>

              <textarea
                rows="4"
                value={followUpNotes}
                onChange={(e) => setFollowUpNotes(e.target.value)}
                placeholder="Follow up instructions..."
              />
            </div>
          </div>
        </div>

        {/* ================= X-RAY REPORTS ================= */}

        <div className="visit-section report-section">
          <div className="section-header">
            <h3>X-Ray Reports</h3>

            <div className="report-icons">
              <button className="icon-btn" title="Edit">
                <Pencil size={18} />
              </button>

              <button
                className="icon-btn"
                title="Clear"
                onClick={() => setXrayReport("")}
              >
                <Eraser size={18} />
              </button>

              <button className="icon-btn" title="Save Template">
                <FileText size={18} />
              </button>

              <button
                className="icon-btn"
                title="Undo"
                onClick={() => setXrayReport("")}
              >
                <Undo2 size={18} />
              </button>
            </div>
          </div>

          <div className="report-input-wrapper">
  <textarea
    rows="4"
    placeholder=""
    value={xrayReport}
    onChange={(e) => setXrayReport(e.target.value)}
  />

  <VoiceInput
    value={xrayReport}
    onChange={setXrayReport}
  />
</div>
        </div>

        {/* ================= MRI ================= */}

        <div className="visit-section report-section">
          <div className="section-header">
            <h3>MRI</h3>

            <div className="report-icons">
              <button className="icon-btn" title="Edit">
                <Pencil size={18} />
              </button>

              <button
                className="icon-btn"
                title="Clear"
                onClick={() => setMriReport("")}
              >
                <Eraser size={18} />
              </button>

              <button className="icon-btn" title="Save Template">
                <FileText size={18} />
              </button>

              <button
                className="icon-btn"
                title="Undo"
                onClick={() => setMriReport("")}
              >
                <Undo2 size={18} />
              </button>
            </div>
          </div>

          <div className="report-input-wrapper">
  <textarea
    rows="4"
    placeholder=""
    value={mriReport}
    onChange={(e) => setMriReport(e.target.value)}
  />

  <VoiceInput
    value={mriReport}
    onChange={setMriReport}
  />
</div>
        </div>
        {/* ================= PAST VISITS ================= */}

      {/* ================= PAST VISITS ================= */}

<div className="visit-section">
  <div className="section-header">
    <h3>Past Visit History</h3>
  </div>

  <div className="history-cards">
    {pastVisits.map((visit) => (
      <div className="history-card" key={visit.id}>

        <div className="history-top">
          <div>
            <h4>{visit.date}</h4>
            <span className="visit-number">
              Visit #{visit.visitNo}
            </span>
          </div>

          <button
            className="view-btn"
            onClick={() => setSelectedVisit(visit)}
          >
            View Details
          </button>
        </div>

        <div className="history-doctor">
          <strong>Doctor:</strong> {visit.doctor}
        </div>

      </div>
    ))}
  </div>
</div>
 {/* ================= VISIT DETAILS MODAL ================= */}

{selectedVisit && (
  <div
    className="visit-modal-overlay"
    onClick={() => setSelectedVisit(null)}
  >
    <div
      className="visit-modal"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Modal Header */}

      <div className="visit-modal-header">

        <div>
          <h2>Visit Details</h2>

          <p>
            {selectedVisit.date} &nbsp;•&nbsp;{" "}
            {selectedVisit.doctor}
          </p>
        </div>

        <button
          className="modal-close-btn"
          onClick={() => setSelectedVisit(null)}
        >
          ✕
        </button>

      </div>


      {/* Visit Basic Information */}

      <div className="modal-basic-info">

        <div>
          <label>Visit Number</label>
          <span>Visit #{selectedVisit.visitNo}</span>
        </div>

        <div>
          <label>Visit Date</label>
          <span>{selectedVisit.date}</span>
        </div>

        <div>
          <label>Doctor</label>
          <span>{selectedVisit.doctor}</span>
        </div>

      </div>


      {/* Vitals */}

      <div className="modal-section">

        <h3>Vitals</h3>

        <div className="modal-vitals-grid">

          <div>
            <label>Blood Pressure</label>
            <span>
              {selectedVisit.vitals?.bloodPressure || "-"}
            </span>
          </div>

          <div>
            <label>Pulse</label>
            <span>
              {selectedVisit.vitals?.pulse || "-"}
            </span>
          </div>

          <div>
            <label>Temperature</label>
            <span>
              {selectedVisit.vitals?.temperature || "-"}
            </span>
          </div>

          <div>
            <label>Height</label>
            <span>
              {selectedVisit.vitals?.height || "-"}
            </span>
          </div>

          <div>
            <label>Weight</label>
            <span>
              {selectedVisit.vitals?.weight || "-"}
            </span>
          </div>

          <div>
            <label>BMI</label>
            <span>
              {selectedVisit.vitals?.bmi || "-"}
            </span>
          </div>

          <div>
            <label>SpO₂</label>
            <span>
              {selectedVisit.vitals?.spo2 || "-"}
            </span>
          </div>

        </div>

      </div>


      {/* Quick Notes */}

      <div className="modal-section">

        <h3>Quick Notes</h3>

        <div className="modal-text-box">
          {selectedVisit.quickNotes || "No notes available."}
        </div>

      </div>


      {/* Medicines */}

      <div className="modal-section">

        <h3>Medicines</h3>

        {selectedVisit.medicines?.length > 0 ? (

          <div className="modal-table-wrapper">

            <table className="modal-table">

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

                {selectedVisit.medicines.map((medicine, index) => (

                  <tr key={index}>

                    <td>{medicine.medicine || "-"}</td>

                    <td>{medicine.type || "-"}</td>

                    <td>{medicine.strength || "-"}</td>

                    <td>{medicine.dose || "-"}</td>

                    <td>{medicine.frequency || "-"}</td>

                    <td>{medicine.duration || "-"}</td>

                    <td>{medicine.food || "-"}</td>

                    <td>{medicine.instruction || "-"}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        ) : (

          <div className="empty-modal-data">
            No medicines recorded.
          </div>

        )}

      </div>


      {/* Tests Requested */}

      <div className="modal-section">

        <h3>Tests Requested</h3>

        {selectedVisit.tests?.length > 0 ? (

          <div className="modal-table-wrapper">

            <table className="modal-table small-table">

              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>By When</th>
                </tr>
              </thead>

              <tbody>

                {selectedVisit.tests.map((test, index) => (

                  <tr key={index}>

                    <td>{test.testName || "-"}</td>

                    <td>{test.byWhen || "-"}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        ) : (

          <div className="empty-modal-data">
            No tests requested.
          </div>

        )}

      </div>


      {/* Advice */}

      <div className="modal-section">

        <h3>Advice</h3>

        <div className="modal-text-box">
          {selectedVisit.advice || "No advice recorded."}
        </div>

      </div>


      {/* Follow Up */}

      <div className="modal-section">

        <h3>Follow Up</h3>

        <div className="modal-followup">

          <div>
            <label>Next Visit Date</label>
            <span>
              {selectedVisit.followUp?.date || "-"}
            </span>
          </div>

          <div>
            <label>Follow Up Notes</label>
            <span>
              {selectedVisit.followUp?.notes || "-"}
            </span>
          </div>

        </div>

      </div>


      {/* X-Ray */}

      <div className="modal-section">

        <h3>X-Ray Reports</h3>

        <div className="modal-text-box">
          {selectedVisit.xrayReport || "No X-Ray report available."}
        </div>

      </div>


      {/* MRI */}

      <div className="modal-section">

        <h3>MRI</h3>

        <div className="modal-text-box">
          {selectedVisit.mriReport || "No MRI report available."}
        </div>

      </div>


      {/* Modal Footer */}

      <div className="visit-modal-footer">

        <button
          className="modal-close-main-btn"
          onClick={() => setSelectedVisit(null)}
        >
          Close
        </button>

      </div>

    </div>
  </div>
)}
        <div className="visit-footer">
          {/* <button className="cancel-btn">Cancel</button>

          <button className="draft-btn">Save Draft</button> */}

          <button className="complete-btn">Complete Visit</button>
        </div>
      </div>
    </div>
  );
};

export default Visit;
