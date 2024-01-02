import { useState } from 'react';
import './App.css';

function App() {
const[age,setAge] = useState(53)
const name = "Josh"

  return (
    <div className="App">
      <div className="board">

      </div>
      {/* <h1>Hello World</h1>
      <Fakehtml></Fakehtml>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>what state is </h2> */}
    </div>
  );
}
function Card() {
  return{
    <div style={}
  }
  
}
function Fakehtml() {
  const clickHandlers = ()=>{
    alert("Yourmom.com is asking for cookies!")
  }
  return (
    <div className="Container">
      <button className="btn" onClick={clickHandlers}>Button</button>
    </div>
  )
}


export default App;
