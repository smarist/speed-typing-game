import React from "react";

function App() {
  const [text, setText] = React.useState("")
  const [timeRemaining, setTimeRemaining] = React.useState(5)
  const [isTimeRunning, setIsTimeRunning] = React.useState(false)

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  console.log(text)
  
  function calculateWordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startCountDown(){
    return(
      setIsTimeRunning(true)
    )
    
  }
  
  React.useEffect(()=> {
    if(timeRemaining > 0 && isTimeRunning){
      setTimeout(()=>{
        setTimeRemaining(time => time - 1)
      },1000)
    }else if (timeRemaining === 0){
        setIsTimeRunning(false)
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div className="App">
      <h1>How fast can you type?</h1>
      <textarea 
      onChange={handleChange}
      value={text}></textarea>
      <h4>Time remaining: {timeRemaining} </h4>
      <button onClick={startCountDown}>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  );
} 

export default App;
