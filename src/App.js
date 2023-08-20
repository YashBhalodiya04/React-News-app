import './App.css'
import Navbar from "./Components/Navbar";
import Sport from "./Components/Sport";
import Entertain from "./Components/Entertain";
import Business from "./Components/Business";
import Tech from "./Components/Tech";
import Home from "./Components/Home";
import Top from "./Components/Top";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Footer from './Components/Footer';

function App() {

  const[mode, setmode] = useState("white");
  let body = document.querySelector("body");

  const changeMode = () =>{
    if (mode === "white") {
        body.style.backgroundColor = "black";
        setmode("black")
    }else{
      body.style.backgroundColor = "white";

      setmode("white")
    }
  }
  return (
    <>
      <Router>
        <div>
        <Navbar  changemode={changeMode} mode={mode}/>
        </div>
        
        <div className='container'>
          <Routes>
            <Route exect path="/" element={<Home mode={mode}/>} />
            <Route exect path="/Home" element={<Home mode={mode}/>} />
            <Route exect path="/Top" element={<Top mode={mode}/>} />
            <Route exect path="/Business" element={<Business mode={mode} />} />
            <Route exect path="/Tech" element={<Tech mode={mode} />} />
            <Route exect path="/Entertain" element={<Entertain mode={mode} />} />
            <Route exect path="/Sport" element={<Sport mode={mode} />} />
          </Routes>
        </div>

        <div className='footer'>
          <Footer mode={mode}/>
        </div>
      </Router>
    </>
  );
}

export default App;
