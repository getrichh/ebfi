import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import History from './components/History';
import WorkExperience from './components/WorkExperience';
import Geography from './components/Geography';
import Activities from './components/Activities';

import Algeria from './components/workitem/Algeria';
import Ukraine from './components/workitem/Ukraine';
import Brazil from "./components/workitem/Brazil";
import China from "./components/workitem/China";
import Europe from "./components/workitem/Europe";
import Korea from "./components/workitem/Korea";
import MalaysiaAndIndonesia from "./components/workitem/MalaysiaAndIndonesia";
import Turkey from "./components/workitem/Turkey";
import USAandCanada from "./components/workitem/USAandCanada";

import Preshipmentinspection from "./components/ActivitiesItem/Preshipmentinspection";


import './App.css';


function App() {
    return (
          <Router>
              <div className="app">
                  <Header />
                  <main>
                      <Routes>
                          <Route path="/history" element={<History />} />
                          <Route path="/work-experience" element={<WorkExperience />} />

                          <Route path="/work-experience/algeria" element={<Algeria />} />
                          <Route path="/work-experience/ukraine" element={<Ukraine />} />
                          <Route path="/work-experience/brazil" element={<Brazil />} />
                          <Route path="/work-experience/china" element={<China />} />
                          <Route path="/work-experience/europe" element={<Europe />} />
                          <Route path="/work-experience/korea" element={<Korea />} />
                          <Route path="/work-experience/malaysiaandindonesia" element={<MalaysiaAndIndonesia />} />
                          <Route path="/work-experience/turkey" element={<Turkey />} />
                          <Route path="/work-experience/usaandcanada" element={<USAandCanada />} />


                          <Route path="/work-experience/preshipmentinspection" element={<Preshipmentinspection/>} />
                          <Route path="/work-experience/usaandcanada" element={<USAandCanada />} />
                          <Route path="/work-experience/usaandcanada" element={<USAandCanada />} />
                          <Route path="/work-experience/usaandcanada" element={<USAandCanada />} />
                          <Route path="/work-experience/usaandcanada" element={<USAandCanada />} />
                          <Route path="/work-experience/usaandcanada" element={<USAandCanada />} />




                          <Route path="/geography" element={<Geography />} />
                          <Route path="/activities" element={<Activities />} />
                          <Route path="/" element={<Navigate replace to="/activities" />} />
                      </Routes>
                  </main>
                  <Footer />
              </div>
          </Router>
    );
}

export default App;
