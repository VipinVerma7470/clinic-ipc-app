import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard/dashboard";
// import AddPatient from "./pages/AddPatient";
import Appointment from "./pages/Appointment/appointment";
import Visit from "./pages/Visit/visit";
import Consultation from "./pages/Consultation/consultation";
import ConsultationDetails from "./pages/ConsultationDetails/ConsultationDetails";

function App() {
  return (
 <HashRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          {/* <Route path="/add-patient" element={<AddPatient />} /> */}

          <Route path="/appointments" element={<Appointment />} />

          <Route path="/visit" element={<Visit />} />

          <Route path="/consultation" element={<Consultation />} />
          <Route
  path="/consultation-details"
  element={<ConsultationDetails />}
/>
          

        </Route>

      </Routes>

    </HashRouter>
  );
}

export default App;