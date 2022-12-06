import React from "react";
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CSS/App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
