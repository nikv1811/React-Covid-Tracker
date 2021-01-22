import './App.css';
// import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {

  


  return (
    <div className="App container container-fluid text-white" style={{background: "black"}}>
      <h1>Covid 19 Tracker</h1>
      
        <Home />
      
    </div>
  );
}

export default App;
