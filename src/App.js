import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card.js';
import Navbar from './components/Navbar/Navbar.js'

import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home.js"
import About from "./Pages/About/About.js"
import Contact from "./Pages/Contact/Contact.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
