import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <Link to="/about">Home</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;