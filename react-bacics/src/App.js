import { useState } from 'react';
import './App.css';
// function teamMaker(){
  
//   return(
//     <div className='createTeam'></div>
//   )
// } 

function App() {

const[question,setQuestion] = useState("")
const[lastClicked,setLastClicked] = useState(0)
const[scores,setScores] = useState([{"name":"Messi","score":300}])
//const teamAdd = ()=>{setScores(...scores,{""}) }

  return (
    <div className="App">
      <div className="board">
        <Catz txt="Foreign Currencies"></Catz>
        <Catz txt="Celebrity Relatives"></Catz>
        <Catz txt="Name That Instrument!"></Catz>
        <Catz txt="-Ology"></Catz>
        <Catz txt="Slang Terms"></Catz>
        <Catz txt="State Capitals"></Catz>
        <Card number={100} question={question} cardquestion = "Afghani" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={100} question={question} cardquestion = "Jake Paul" setQuestion = {setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} question={question} cardquestion="Loud metalic sound created by crashing them together" setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} question={question} cardquestion = "The study of human history and prehistory through excavation"setLastClicked={setLastClicked} setQuestion={setQuestion}></Card>
        <Card number={100} question={question} cardquestion = " ''Cap'' " setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} question={question} cardquestion = "Albany" setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={200} question={question} cardquestion = "Rupee" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question={question} cardquestion = "Scott Swift" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question={question} cardquestion = "High pitched, woody, sort of sound." setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question={question} cardquestion = "The study of humans" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question={question} cardquestion = "''Rizz''" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} question={question} cardquestion = "Sacrimento" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} question={question} cardquestion = "Shekels" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} question={question} cardquestion = "Denise Jonas" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} question={question} cardquestion = "Jason Derulo made a song named after this instrument" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} question={question} cardquestion = "The study of medicine involving skin" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} question={question} cardquestion = "''Opps''" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} question={question} cardquestion = "Baton Rouge" setQuestion={setQuestion}  setLastClicked={setLastClicked}></Card>
        <Card number={400} question={question} cardquestion = "Lire" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} question={question} cardquestion = "Nancy Dow" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} question={question} cardquestion = "Large string instrument played with fingers" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} question={question} cardquestion = "The study of eggs" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} question={question} cardquestion = "Gatekeeping(Gatekeeper)" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked} ></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        <Card number={500} setLastClicked={setLastClicked}></Card>
        {question ? <Module question={question} setQuestion={setQuestion}></Module> : null}
      </div>
        <Score lastClicked={lastClicked} teamName={scores[0].name} score = {scores[0].score} scores = {scores} setScores={setScores} teamNumber={0}></Score>
        
    </div>
  );
}
function TeamScreen({setCrock}){
  return(
    <div className='bgBlur' onClick={()=>{
      setCrock(false)
    }}>
      <div className="teamScreen" onClick={(event)=>event.stopPropagation()}>
        <h1 className='pluh' >Add Team</h1>
        <input className='inputName' placeholder='Enter Your Team Name' ></input>
        <button className='save' >Save</button>
      </div>
    </div>
  )
}
function Score({lastClicked, teamName, score, setScores, teamNumber,scores}){
  const [crock, setCrock] = useState(false)
  const teamAdder = ()=>{

  }

  const addPoints = (name, scoreToAdd) =>{
    console.log(scoreToAdd)
      // Find the index of the team "Messi" in the array
    const teamIndex = scores.findIndex(team => team.name === name);

    // If "Messi" is found, update its score
    if (teamIndex !== -1) {
      // Create a new array to avoid mutating the state directly
      const newScores = [...scores];
      newScores[teamIndex].score += scoreToAdd;
      
      // Set the updated array as the new state
      setScores(newScores);
  }
}

const minusPoints = (name, scoreToMinus) =>{
  console.log(scoreToMinus)
  const teamIndex = scores.findIndex(team => team.name === name);
  if(teamIndex !== -1) {
    const newScores = [...scores]
    newScores[teamIndex].score -= scoreToMinus;
    setScores(newScores)
  }

}

return(
  <div className="father">
    <div className="soccerMom">
        <h1>{teamName}</h1>
      <div className='addSub'>
        <div className='subtractPt'  onClick={()=>{minusPoints(teamName, lastClicked)}}>-</div>
        <h2>{score}</h2>
        <div className='addPt' onClick={()=>{addPoints(teamName, lastClicked)}}>+</div>
      </div>
    </div>
    <div className="scoreBar"></div>
      <div className="addTeam" onClick={()=>{setCrock(true)}}>
          <h1>+</h1>
          <h3>Add Team</h3>

    </div>
       {crock==true ? <TeamScreen setCrock={setCrock}></TeamScreen> : null}
    </div>
)
}
function Module({question, setQuestion}) {
  const clickHandler = ()=>{
    setQuestion("")
  }
  return(
    <div className='parentMod' onClick={clickHandler}>
      <div className='mod' onClick={(event)=>event.stopPropagation()}>
        <h1>{question}</h1>
      </div>
    </div>
  )
}
function Card({number, question, cardquestion, setQuestion, setLastClicked}) {
  //create clicked state to keep track of which ones were already clicked.
  const[clicked, setClicked] = useState(false)
  const clickHandler = ()=>{
    setClicked(true)
    setQuestion(cardquestion)
    setLastClicked(number)
    //.style.backgroundColor = "#fffff"
  }
  return(
    //if clicked is true, set it to the clicked CSS(greyed out). else set to card CSS.
    <div className={clicked? "clicked": "card"}onClick={clickHandler}>
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
