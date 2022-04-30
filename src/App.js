import React from "react";

function App() {
  const STARTING_TIME = 10
  const [text, setText] = React.useState("")
  const [timeRemaining, setTimeRemaining] = React.useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = React.useState(false)
  const [wordCount, setWordCount] = React.useState(0)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  console.log(text)
  
  function calculateWordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

 
  
  React.useEffect(()=> {
    if(timeRemaining > 0 && isTimeRunning){
      setTimeout(()=>{
        setTimeRemaining(time => time - 1)
      },1000)
    }else if (timeRemaining === 0){
        endGame()
    }
  }, [timeRemaining, isTimeRunning])

  function startGame(){
      setIsTimeRunning(true)
      setTimeRemaining(STARTING_TIME)
      setText(" ")
  }

  function endGame(){
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
  }
  


  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea 
      onChange={handleChange}
      value={text}
      disabled={!isTimeRunning}></textarea>
      <h4>Time remaining: {timeRemaining} </h4>
      <button onClick={startGame}
      disabled={isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
} 

export default App;
