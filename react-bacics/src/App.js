import { useState } from 'react';
import './App.css';

function App() {
const[age,setAge] = useState(53)
const name = "Josh"

  return (
    <div className="App">
      <div className="board">
        <Catz txt="Foreign Currencies"></Catz>
        <Catz txt="Celebrity Relatives"></Catz>
        <Catz txt="Name That Instrument!"></Catz>
        <Catz txt="-Ology"></Catz>
        <Catz txt="Slang Terms"></Catz>
        <Catz txt="State Abreviations"></Catz>
        <Card number={100}></Card>
        <Card number={100}></Card>
        <Card number={100}></Card>
        <Card number={100}></Card>
        <Card number={100}></Card>
        <Card number={100}></Card>
        <Card number={200}></Card>
        <Card number={200}></Card>
        <Card number={200}></Card>
        <Card number={200}></Card>
        <Card number={200}></Card>
        <Card number={200}></Card>
        <Card number={300}></Card>
        <Card number={300}></Card>
        <Card number={300}></Card>
        <Card number={300}></Card>
        <Card number={300}></Card>
        <Card number={300}></Card>
        <Card number={400}></Card>
        <Card number={400}></Card>
        <Card number={400}></Card>
        <Card number={400}></Card>
        <Card number={400}></Card>
        <Card number={400}></Card>
        <Card number={500}></Card>
        <Card number={500}></Card>
        <Card number={500}></Card>
        <Card number={500}></Card>
        <Card number={500}></Card>
        <Card number={500}></Card>

      </div>
    </div>
  );
}
function Module({})
function Card({number}) {
  const clickHandler = ()=>{
    prompt("HELLO?")
  }
  return(
    <div className="card" onClick={clickHandler}>
      <p>${number}</p>
     
    </div>
  )
  
}
function Catz({txt}) {
  return(
    <div className='title'>
      <p>{txt}</p>
    </div>
  )
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
