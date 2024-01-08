import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Verify from './Verify';
import ExamList from './ExamList';
import StartExam from './StartExam';
import ExamFinish from './ExamFinish';

function Routing() {
  return (
    //<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Home />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/examlist" element={<ExamList />} />
        <Route path="/startexam/:examId" element={<StartExam />} />
        <Route path="/ExamFinish" element={<ExamFinish />} />
      </Routes>
   // </Router>
  );
}

export default Routing;
