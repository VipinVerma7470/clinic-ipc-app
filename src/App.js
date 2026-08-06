import React, { useState, useEffect } from 'react';

function App() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', gender: 'Male', phone: '' });

  const loadPatients = async () => {
    try {
      const data = await window.api.getPatients();
      setPatients(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { loadPatients(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert("Name & Phone required");
    await window.api.addPatient(form);
    setForm({ name: '', age: '', gender: 'Male', phone: '' });
    loadPatients();
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Clinic Management - IPC Architecture</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
        <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <button type="submit">Save</button>
      </form>

      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td><td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td><td>{p.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;