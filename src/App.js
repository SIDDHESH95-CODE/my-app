import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App(props) {
  const [mode, setMode] = useState('light');  // Wether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c3e50';
      showAlert("Light mode has been enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <> 
      <Router>
      <Navbar title="Text-Utilities" mode={mode} togglemode={togglemode} />
      {/* <Navbar/> */}

      <Alert alert={alert} />

      <Switch>
        <Route path="/about">
          <About mode={mode}/>
        </Route>
        <Route path="/">
          <Textform heading="Text-Utilities: Word counter, Character counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />
        </Route>
      </Switch>


      {/* <About/> */}
      </Router>
    </>
  );
}

export default App;
