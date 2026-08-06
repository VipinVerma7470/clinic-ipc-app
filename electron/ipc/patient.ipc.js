const { ipcMain } = require('electron');
const db = require('../database/connection');

ipcMain.handle('add-patient', async (event, patient) => {
  const { name, age, gender, phone } = patient;
  const stmt = db.prepare('INSERT INTO patients (name, age, gender, phone) VALUES (?, ?, ?, ?)');
  const info = stmt.run(name, age, gender, phone);
  return { id: info.lastInsertRowid, success: true };
});

ipcMain.handle('get-patients', async () => {
  return db.prepare('SELECT * FROM patients ORDER BY id DESC').all();
});