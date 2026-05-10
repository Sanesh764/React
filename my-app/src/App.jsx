
import './App.css'
import { useState } from "react";
//import Card from './components/Card.jsx';

function App() {
let [counter,SetCounter]=useState(1);

const addvalue=()=>{
  // SetCounter(counter+1);
  SetCounter(prevCounter=>prevCounter+1);
  SetCounter(prevCounter=>prevCounter+1);
  SetCounter(prevCounter=>prevCounter+1);
  SetCounter(prevCounter=>prevCounter+1);
}
const remove=()=>{
  SetCounter(counter-1);
}
  return (
    <>
    <h1>Tailwant css</h1>
    <button onClick={addvalue}>Add value</button>
    <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
