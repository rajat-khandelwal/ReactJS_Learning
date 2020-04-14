import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from  './Components/Welcome'
import Greets from './Components/Greets'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import ParentComponent from './Components/ParentComponent';
import Namelist from './Components/list';
import StyleSheet from './Components/StyleSheet'
import './Components/mystyle.css'
import style from './Components/mystyle.module.css'
import From from './Components/form'
import LifecycleA from './Components/lifecycleA';


function App() {
  return (
    <div className="App">

{/* <From/> */}
<LifecycleA/>
{/* <h1 className='error'>error</h1>
<h1 className={style.success}>Success</h1>
 */}

     {/* <StyleSheet primary={false} /> */}
{/* <Namelist/> */}
{/* <ParentComponent/> */}

{/* <FunctionClick/> */}

  {/* <ClassClick/> */}
{/* <Counter/> */}

{/* <Greets name="Rajat" heroName = "this is the most powerfull person " /> */}
{/* < Welcome name="Rajat" ></Welcome> */}
  {/* 

<p>powerful man</p>

  </Welcome>
  < Welcome name="roopal" />
  < Welcome name="shruti" /> */}
   
   
    </div>
  );
}

export default App;
