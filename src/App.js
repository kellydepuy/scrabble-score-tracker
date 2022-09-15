import StartNewGameContent from "./components/StartNewGameContent";
import { useState } from "react";
// import GameContent from "./components/GameContent";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [playersArray, setPlayersArray] = useState([])

  function handleStartGame(e) {
    e.preventDefault()
    console.log(e)
    for(let i = 0; i < 4; i++) {
      if (e.target.form[i] ) {
        setPlayersArray(...playersArray, e.target.form[i].value)
      }
    }
    setIsGameStarted(true)
}


  return (
    <div className="container">
      {isGameStarted === false && <StartNewGameContent isGameStarted={isGameStarted} handleStartGame={handleStartGame}/>}
      {/* {isGameStarted === true && <GameContent playersArray={playersArray}/>} */}
    </div>
  );
}

export default App;
