
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Login from "./Routes/Login"
import Contact from "./Routes/Contact"
import Campgrounds from "./Routes/Campgrounds";
import Error from "./Routes/Error";
import Dashboard from "./Routes/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer"
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false)
    function toggleDarkMode(){
        setDarkMode(prevDarkMode=> ! prevDarkMode)
      }
      
 
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>} >
        <Route index element={<Home/>}/>
        <Route path="*" element={<Error/>} />
        <Route path="login" element={<Login darkMode={darkMode}/>} />
        <Route path="contact" element={<Contact darkMode={darkMode}/>} />
        <Route path="campgrounds" element={<Campgrounds/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App