import React from "react";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CSS/App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
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
            <Route path="/" element={<Home />}/>
{/* -----------------Information---------------------- */}
            <Route path="/medical" element={<Medical />}/>
            <Route path="/raising" element={<Raising/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/emergency" element={<Emergency/>}/>
            <Route path="/job" element={<Job/>}/>
            <Route path="/transportation" element={<Transportation/>}/>
            <Route path="/tax" element={<Tax/>}/>
            <Route path="/dailylife" element={<DailyLife/>}/>
            
            
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
