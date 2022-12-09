import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CSS/App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
// nav
import DisasterPreventionMap from "./Components/Home/HomeComponents/DisasterPreventionMap";
/* -----------------Information---------------------- */
import Medical from "./Components/Pages/01_Medical/Medical";
import Raising from "./Components/Pages/02_Raising/Raising";
import Education from "./Components/Pages/03_Education/Education";
import Emergency from "./Components/Pages/04_Emergency/Emergency";
import Job from "./Components/Pages/05_Job/Job";
import Transportation from "./Components/Pages/06_Transportation/Transportation";
import Tax from "./Components/Pages/07_Tax/Tax";
import DailyLife from "./Components/Pages/08_DailyLife/DailyLife";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/tomakomai" element={<Home />} />
          {/* nav */}
          <Route path="/tomakomai/map" element={<DisasterPreventionMap />} />
          {/* -----------------Information---------------------- */}
          <Route path="/tomakomai/medical" element={<Medical />} />
          <Route path="/tomakomai/raising" element={<Raising />} />
          <Route path="/tomakomai/education" element={<Education />} />
          <Route path="/tomakomai/emergency" element={<Emergency />} />
          <Route path="/tomakomai/job" element={<Job />} />
          <Route
            path="/tomakomai/transportation"
            element={<Transportation />}
          />
          <Route path="/tomakomai/tax" element={<Tax />} />
          <Route path="/tomakomai/dailylife" element={<DailyLife />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
