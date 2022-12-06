import React from "react";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CSS/App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
/* -----------------Information---------------------- */
import Medical from "./Components/Pages/Medical";
import Raising from "./Components/Pages/Raising";
import Education from "./Components/Pages/Education";
import Emergency from "./Components/Pages/Emergency";
import Job from "./Components/Pages/Job";
import Transportation from "./Components/Pages/Transportation";
import Tax from "./Components/Pages/Tax";
import DailyLife from "./Components/Pages/DailyLife";



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
