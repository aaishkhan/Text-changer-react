
import './App.css';
import Navbar from './components/Navbar.js';
import TextChange from './components/TextChange'; 
import About from './components/About'; 
import React, {useState} from 'react';
import Alerterr from './components/Alerterr';
import { Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
 setAlert({
    msg: message,
    type: type
 })
 setTimeout(() => {
setAlert(null);  
 }, 2000);
} 


const toggleMode = ()=>{
  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor="grey";
    showAlert("Dark mode has been enabled", "success");

  } else {
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled", "success");
  }
}

const toggleModeRed = ()=>{
  if(mode === "light"){
    console.log("redddd");
    setMode("warning");
    document.body.style.backgroundColor="Red";
    showAlert("Red mode has been enabled", "primary");

  } else {
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled", "success");
  }
}

  return (
 
<>

<Navbar title="Ash" homepage="Home2" about="about" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed}/>
<Alerterr alert={alert}/>
<Routes>
<Route path='/About' element={<About/>}></Route>
<Route path='/' element={<TextChange heading="Enter your Text" mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>}></Route>
</Routes>
</>
  );
}

export default App;
