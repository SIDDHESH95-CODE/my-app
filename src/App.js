// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
    

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c3e50';
      showAlert("Dark mode has been enable", "Success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
  }


  return (
    //This is called jsx element.
    <>
      <Router>
      <Navbar title="My app" about="About Us" mode={mode} toggleMode={toggleMode}/>
      {/* for the default props  */}
      {/* <Navbar/> */}
      {/* <Navbar title="My app"/> */}

      <Alert alert={alert}/>
        <div className="container my-3">
        <Switch>
            {/* exact defines the exact path of that page & not page in between. */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze.." mode={mode}/>
            </Route>
          </Switch>

        </div>
    {/* <div classNameName="blank">Lovely</div> */}
      </Router>
    </>
  );
}

export default App;
