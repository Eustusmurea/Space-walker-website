import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Destination from './pages/destination';
import Crew from './pages/crew';
import Technology from './pages/technology';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="destination">Destination</Link>
            </li>
            <li>
              <Link to="crew">Crew</Link>
            </li>
            <li>
              <Link to="technology">Technology</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App
