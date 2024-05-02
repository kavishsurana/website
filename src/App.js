
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import React from 'react';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
