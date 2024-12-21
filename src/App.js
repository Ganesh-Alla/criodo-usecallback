import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activity1 from './Tasks/Activity1';
import Activity2 from './Tasks/Activity2';
import Activity3 from './Tasks/Activity3';
import Activity4 from './Tasks/Activity4';
import Activity5 from './Tasks/Activity5';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Crio.do Usecallback assignment</h1>
        <nav>
          <ul>
            <li><Link to="/activity1">Activity 1</Link></li>
            <li><Link to="/activity2">Activity 2</Link></li>
            <li><Link to="/activity3">Activity 3</Link></li>
            <li><Link to="/activity4">Activity 4</Link></li>
            <li><Link to="/activity5">Activity 5</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/activity1" element={<Activity1 />} />
          <Route path="/activity2" element={<Activity2 />} />
          <Route path="/activity3" element={<Activity3 />} />
          <Route path="/activity4" element={<Activity4 />} />
          <Route path="/activity5" element={<Activity5 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
