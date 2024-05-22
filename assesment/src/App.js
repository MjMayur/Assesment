import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeDetailPage from './component/Detail';
import ListView from './component/ListView';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<EmployeeDetailPage />} />
        <Route path="/" element={<ListView />} />
      </Routes>
    </Router>
  );
};

export default App;
