import StartNewGameContent from "./components/StartNewGameContent";
import { useState } from "react";
import GameContent from "./components/GameContent";
import Header from "./components/Header";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [playersArray, setPlayersArray] = useState([])

  const [numPlayers, setNumPlayers] = useState(1)

  const [isGameEnded, setIsGameEnded] = useState(false)

  function handleStartGame(e) {
    e.preventDefault()
    for(let i = 0; i < numPlayers; i++) {
      if (e.target.form[i].value) {
        setPlayersArray(current => [...current, e.target.form[i].value])
      }
    }
    setIsGameStarted(true)
}    

function handleNumPlayers(e) {
    setNumPlayers(e.target.value)
}

function handlePlayAgain() {
  console.log("clicked")
  setIsGameStarted(false)
  setPlayersArray([])
  setNumPlayers(1)
  setIsGameEnded(false)
}

function gameEnded() {
  setIsGameEnded(true)
}

  return (
    <div className="container">
      <Header />
      {isGameStarted === false && <StartNewGameContent numPlayers={numPlayers} isGameStarted={isGameStarted} handleNumPlayers={handleNumPlayers} handleStartGame={handleStartGame}/>}
      {isGameStarted === true && <GameContent gameEnded={gameEnded} isGameEnded={isGameEnded} handlePlayAgain={handlePlayAgain} numPlayers={numPlayers} playersArray={playersArray}/>}
     
    </div>
  );
}

export default App;
