import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from  './Components/Welcome'
import Greets from './Components/Greets'
import Message from './Components/Message'
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

<Counter/>

{/* <Greets name="Rajat" heroName = "this is the most powerfull person " /> */}

  {/* < Welcome name="Rajat" >

<p>powerful man</p>

  </Welcome>
  < Welcome name="roopal" />
  < Welcome name="shruti" /> */}
   
      </header>
    </div>
  );
}

export default App;
