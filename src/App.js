import StartNewGameContent from "./components/StartNewGameContent";
import { useState } from "react";
import GameContent from "./components/GameContent";
import Header from "./components/Header";


function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [playersArray, setPlayersArray] = useState([])
  const [numPlayers, setNumPlayers] = useState(1)

  function handleStartGame(e) {
    e.preventDefault()
    console.log(e)
    for(let i = 0; i < numPlayers; i++) {
      if (e.target.form[i].value) {
        console.log(e.target.form[i].value)
        setPlayersArray(current => [...current, e.target.form[i].value])
      }
    }
    setIsGameStarted(true)
}    

function handleNumPlayers(e) {
    setNumPlayers(e.target.value)
}


  return (
    <div className="container">
      <Header />
      {isGameStarted === false && <StartNewGameContent numPlayers={numPlayers} isGameStarted={isGameStarted} handleNumPlayers={handleNumPlayers} handleStartGame={handleStartGame}/>}
      {isGameStarted === true && <GameContent playersArray={playersArray}/>}
    </div>
  );
}

export default App;
