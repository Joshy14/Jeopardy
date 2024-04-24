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
const[scores,setScores] = useState([])
const [crock, setCrock] = useState(false)
const [answer, setAnswer] = useState("")
//const teamAdd = ()=>{setScores(...scores,{""}) }
const scoreCards = scores.map(score => <Score lastClicked={lastClicked} teamName={score.name} score = {score.score} scores = {scores} setScores={setScores} teamNumber={0} crock={crock} setCrock={setCrock}></Score>)
  
return (   
    <div className="App">
      <div className="board">
        <Catz txt="Foreign Currencies"></Catz>
        <Catz txt="Celebrity Relatives"></Catz>
        <Catz txt="Name That Instrument!"></Catz>
        <Catz txt="-Ology"></Catz>
        <Catz txt="Slang Terms"></Catz>
        <Catz txt="State Capitals"></Catz>
        <Card number={100} setAnswer={setAnswer} answer="Afghanistan"  question={question} cardquestion = "Afghani" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={100} setAnswer={setAnswer} answer="Logan Paul's brother"  question={question} cardquestion = "Jake Paul" setQuestion = {setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} setAnswer={setAnswer} answer="Crash Cymbals"  question={question} cardquestion="Loud metalic sound created by crashing them together" setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} setAnswer={setAnswer} answer="Archeology"  question={question} cardquestion = "The study of human history and prehistory through excavation"setLastClicked={setLastClicked} setQuestion={setQuestion}></Card>
        <Card number={100} setAnswer={setAnswer} answer="Not the truth"  question={question} cardquestion = " ''Cap'' " setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={100} setAnswer={setAnswer} answer="New York"  question={question} cardquestion = "Albany" setQuestion={setQuestion}setLastClicked={setLastClicked}></Card>
        <Card number={200} setAnswer={setAnswer} answer="India"  question={question} cardquestion = "Rupee" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} setAnswer={setAnswer} answer="Taylor Swift's dad" question={question} cardquestion = "Scott Swift" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} setAnswer={setAnswer} answer="Clarinet"  question={question} cardquestion = "High pitched, woody, sort of sound." setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} setAnswer={setAnswer} answer="Anthropology"  question={question} cardquestion = "The study of humans" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} setAnswer={setAnswer} answer="To have romantic appeal or charm"  question={question} cardquestion = "''Rizz''" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={200} setAnswer={setAnswer} answer="California" question={question} cardquestion = "Sacrimento" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} setAnswer={setAnswer} answer="Israel" question={question} cardquestion = "Shekels" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} setAnswer={setAnswer} answer="Jonas"  question={question} cardquestion = "Denise Jonas" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} setAnswer={setAnswer} answer="Trumpets"  question={question} cardquestion = "Jason Derulo made a song named after this instrument" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} setAnswer={setAnswer} answer="Dermatology"  question={question} cardquestion = "The study of medicine involving skin" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} setAnswer={setAnswer} answer="Enemies - OPPositions"  question={question} cardquestion = "''Opps''" setQuestion={setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={300} setAnswer={setAnswer} answer="Louisiana"  question={question} cardquestion = "Baton Rouge" setQuestion={setQuestion}  setLastClicked={setLastClicked}></Card>
        <Card number={400} setAnswer={setAnswer} answer="Itallian"  question={question} cardquestion = "Lira" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} setAnswer={setAnswer} answer="Jennifer Aniston"  question={question} cardquestion = "Nancy Dow" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} setAnswer={setAnswer} answer="Harp"  question={question} cardquestion = "Large string instrument played with fingers" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} setAnswer={setAnswer} answer="Oology"  question={question} cardquestion = "The study of eggs" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} setAnswer={setAnswer} answer="To not tell someone something"  question={question} cardquestion = "Gatekeeping(Gatekeeper)" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={400} setAnswer={setAnswer} answer="Pennsilvania"  question={question} cardquestion = "Harrisburg" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={500} setAnswer={setAnswer} answer="Algeria, Bahrain, Iraq, Jordan, Kuwait, Libya, Serbia, or Tunisia"  question={question} cardquestion = "Dinar" setQuestion = {setQuestion} setLastClicked={setLastClicked} ></Card>
        <Card number={500} setAnswer={setAnswer} answer="Pope Bennedict XVI's mother"  question={question} cardquestion = "Maria Peinter" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card> {/*Pope Bennedict XVI mom*/}
        <Card number={500} setAnswer={setAnswer} answer="Marimba"  question={question} cardquestion = "Wooden bars struck with mallets to produce warm, resonant tones" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={500} setAnswer={setAnswer} answer="Vexillology"  question={question} cardquestion = "The study of flags" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={500} setAnswer={setAnswer} answer="When a person says something ack or lame or out of topic in a coversation."  question={question} cardquestion = "''Dayroom''" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        <Card number={500} setAnswer={setAnswer} answer="Montana"  question={question} cardquestion = "Helena" setQuestion = {setQuestion} setLastClicked={setLastClicked}></Card>
        {question ? <Module answer={answer} setAnswer={setAnswer} question={question} setQuestion={setQuestion} ></Module> : null}
      </div>
      {/* <Score lastClicked={lastClicked} teamName={scores[0].name} score = {scores[0].score} scores = {scores} setScores={setScores} teamNumber={0}></Score> */}
      <div className='father'>
        {scoreCards}
      <div className="addTeam" onClick={()=>{setCrock(true)}}>
          <h1>+</h1>
          <h3>Add Team</h3>
    </div></div>
      
       {crock==true ? <TeamScreen setScores={setScores} scores={scores} setCrock={setCrock}></TeamScreen> : null}
    
        
    </div>
  );
}
function TeamScreen({setCrock, scores, setScores}){
const clickHandler = ()=>{
  const h = document.querySelector(".inputName")
 const newTeam = {"name":h.value,"score":0}
setScores([...scores,newTeam])
setCrock(false)
}
  return (
    <div className='bgBlur' onClick={()=>{
      setCrock(false)
    }}>
      <div className="teamScreen" onClick={(event)=>event.stopPropagation()}>
        <h1 className='pluh' >Add Team</h1>
        <input className='inputName' placeholder='Enter Your Team Name' ></input>
        <button className='save' onClick={()=>{ 
      clickHandler()
    }}>Save</button>
      </div>
    </div>
  )
}
function Score({lastClicked, teamName, score, setScores, teamNumber,scores, setCrock, crock}){
  
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
 
    <div className="soccerMom">
        <h1>{teamName}</h1>
      <div className='addSub'>
        <div className='subtractPt'  onClick={()=>{minusPoints(teamName, lastClicked)}}>-</div>
        <h2>{score}</h2>
        <div className='addPt' onClick={()=>{addPoints(teamName, lastClicked)}}>+</div>
      </div>
    </div>
    
)
}
function Module({question, setQuestion, answer }) {
  const [showAnswer, setShowAnswer] = useState(false)
  const keyHandler = (event)=>{
    if (event.key === 'Tab') {
      // Your logic for when Space key is pressed
      console.log('Tab key pressed!');
      setShowAnswer(true)
    }
  }
  const clickHandler = ()=>{
    setQuestion("")
  }
  return(
    <div className='parentMod' onClick={clickHandler}>
      <div className='mod' onClick={(event)=>event.stopPropagation()}>
        <h1>{question}</h1>

        {showAnswer?<h2>{answer}</h2> :<h5 className='reveal' onKeyDown={keyHandler} tabIndex={0}>Press tab 2 times to reveal answer</h5>}
      </div>
    </div>
  )
}
function Card({number, question, cardquestion, setQuestion, setLastClicked, answer, setAnswer}) {
  //create clicked state to keep track of which ones were already clicked.
  const[clicked, setClicked] = useState(false)
  const clickHandler = ()=>{
    setClicked(true)
    setQuestion(cardquestion)
    setLastClicked(number)
    setAnswer(answer)
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
