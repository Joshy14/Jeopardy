import { useState } from 'react';
import './App.css';

function App() {

const[question,setQuestion] = useState("")
const[lastClicked,setLastClicked] = useState(0)
const[scores,setScores] = useState([{"name":"messi","score":300}])

console.log(lastClicked)
  return (
    <div className="App">
      <div className="board">
        <Catz txt="Foreign Currencies"></Catz>
        <Catz txt="Celebrity Relatives"></Catz>
        <Catz txt="Name That Instrument!"></Catz>
        <Catz txt="-Ology"></Catz>
        <Catz txt="Slang Terms"></Catz>
        <Catz txt="State Abreviations"></Catz>
        <Card number={100} question = "Afghani" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={100} question = "Jake Paul" setQuestion = {setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} question="Jason Derulo made a song named after this instrument" setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} question = "The study of human history and prehistory through excavation"setLastClicked={setLastClicked} setQuestion={setQuestion}></Card>
        <Card number={100} question = " ''Cap'' " setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} question = "''IL.''" setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={200} question = "Real" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question = "Scott Swift" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question = "High pitched, woody, sort of sound." setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question = "The study of humans" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question = "''Rizz''" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200}setLastClicked={setLastClicked}></Card>
        <Card number={300} setLastClicked={setLastClicked}></Card>
        <Card number={300} setLastClicked={setLastClicked}></Card>
        <Card number={300} setLastClicked={setLastClicked}></Card>
        <Card number={300} setLastClicked={setLastClicked}></Card>
        <Card number={300} setLastClicked={setLastClicked}></Card>
        <Card number={300} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked} ></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        {question ? <Module question={question} setQuestion={setQuestion}></Module> : null}
      </div>
      <Score lastClicked={lastClicked} teamName={scores[0].name} score = {scores[0].score}></Score>
    </div>
  );
}
function Score( lastClicked, teamName,score){
return(
  <div className="father">
    <div className="soccerMom">
      <h1>{teamName}</h1>
      <h2>{score}</h2>
    </div>
  </div>
)
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
function Card({number, question, setQuestion, setLastClicked}) {
  const clickHandler = ()=>{
    setQuestion(question)
    setLastClicked(number)
    
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
