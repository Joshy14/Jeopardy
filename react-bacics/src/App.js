import { useState } from 'react';
import './App.css';

function App() {

const[question,setQuestion] = useState("")

  return (
    <div className="App">
      <div className="board">
        <Catz txt="Foreign Currencies"></Catz>
        <Catz txt="Celebrity Relatives"></Catz>
        <Catz txt="Name That Instrument!"></Catz>
        <Catz txt="-Ology"></Catz>
        <Catz txt="Slang Terms"></Catz>
        <Catz txt="State Abreviations"></Catz>
        <Card number={100} question = "Shekkles" setQuestion = {setQuestion}></Card>
        <Card number={100} question = "Jake Paul" setQuestion = {setQuestion}></Card>
        <Card number={100} question="Jason Derulo made a song named after this instrument" setQuestion={setQuestion}></Card>
        <Card number={100} question = "The study of human history and prehistory through excavation" setQuestion={setQuestion}></Card>
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
        {question ? <Module question={question} setQuestion={setQuestion}></Module> : null}
      </div>
    </div>
  );
}
function Module({question, setQuestion}) {
  const clickHandler = ()=>{
    setQuestion("")
  }
  return(
    <div className='parentMod' onClick={clickHandler}>
      <div className='mod'>
        <h1>{question}</h1>
      </div>
    </div>
  )
}
function Card({number, question, setQuestion}) {
  const clickHandler = ()=>{
    setQuestion(question)
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
