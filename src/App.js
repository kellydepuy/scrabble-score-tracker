import StartNewGameContent from "./pages/StartNewGameContent";
import { useState } from "react";
import GameContent from "./pages/GameContent";
import Header from "./pages/Header";
import EndGameContent from "./pages/EndGameContent";
import WordLists from "./pages/WordLists";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate()
 
  const [playersArray, setPlayersArray] = useState([])
  const [count, setCount] = useState(0)

  const [numPlayers, setNumPlayers] = useState(1)
  const [bestWord, setBestWord] = useState({bestWord: "", playerName: "", bestScore: 0})

  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [playerThreeScore, setPlayerThreeScore] = useState(0)
  const [playerFourScore, setPlayerFourScore] = useState(0)
  
  const [lastWordScorePlayerOne, setLastWordScorePlayerOne] = useState(0)
  const [lastWordScorePlayerTwo, setLastWordScorePlayerTwo] = useState(0)
  const [lastWordScorePlayerThree, setLastWordScorePlayerThree] = useState(0)
  const [lastWordScorePlayerFour, setLastWordScorePlayerFour] = useState(0)

  const [stats, setStats] = useState()

  const [listOfWordsP1, setListOfWordsP1] = useState([])
  const [listOfWordsP2, setListOfWordsP2] = useState([])
  const [listOfWordsP3, setListOfWordsP3] = useState([])
  const [listOfWordsP4, setListOfWordsP4] = useState([])

  const letterValues = {
    A: 1, E: 1, I: 1, O: 1, U: 1, R: 1, S: 1, T: 1, L: 1, N: 1, D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10
}
  
  function handleEndGame(e) {
    const statsObj ={
        playerOne: {
            playerOneName: playersArray[0],
            playerOneScore: playerOneScore
        },
        playerTwo: {
            playerTwoName: playersArray[1],
            playerTwoScore: playerTwoScore
        },
        playerThree: {
            playerThreeName: playersArray[2],
            playerThreeScore: playerThreeScore
        },
        playerFour: {
            playerFourName: playersArray[3],
            playerFourScore: playerFourScore
        },
        bestWord: bestWord,
        playerScoresArray: [playerOneScore, playerTwoScore, playerThreeScore, playerFourScore]
    }
    setStats(statsObj)
    document.getElementById("hidden").style.display = "none"
  }

function handleAddWordToScore(e) {
    e.preventDefault()
    const currentPlayerIndex = e.target[0].options.selectedIndex
    const currentPlayer = playersArray[currentPlayerIndex]
    let wordTotal = 0
    let word = ""

    setCount(count + 1)
    for (let i = 1; i < 41; i += 4) {
        let letter = e.target[i].value.toUpperCase()
        const double = e.target[i + 1].checked
        const triple = e.target[i + 2].checked
        let letterTotal = 0
        
        if (letter.length === 1) {
            word += letter
            if (double) {
                letterTotal = letterValues[letter] * 2
                wordTotal += letterTotal

            } else if (triple) {
                letterTotal = letterValues[letter] * 3
                wordTotal += letterTotal
            } else {
                letterTotal = letterValues[letter]
                wordTotal += letterTotal
            }}
    }
    
    if (e.target[41].value) {
        const multiplier1 = e.target[41].value * 2
        wordTotal = wordTotal * multiplier1
    }
    
    if (e.target[42].value) {
        const multiplier2 = e.target[42].value * 3
        wordTotal = wordTotal * multiplier2
    }

    if(wordTotal > bestWord.bestScore) {
        setBestWord({bestWord: word, playerName: currentPlayer, bestScore: wordTotal})
    }

    switch (currentPlayerIndex) {
        case 0:
            setPlayerOneScore(prev => prev + wordTotal)
            setLastWordScorePlayerOne(wordTotal)
            setListOfWordsP1((prev) => [...prev, {id: "p1" + word + count, word: word, score: wordTotal}])
            break
        case 1:
            setPlayerTwoScore(prev => prev + wordTotal)
            setLastWordScorePlayerTwo(wordTotal)
            setListOfWordsP2((prev) => [...prev, {id: "p2" + word + count, word: word, score: wordTotal}])
            break
        case 2:
            setPlayerThreeScore(prev => prev + wordTotal)
            setLastWordScorePlayerThree(wordTotal)
            setListOfWordsP3((prev) => [...prev, {id: "p3" + word + count, word: word, score: wordTotal}])
            break
        case 3:
            setPlayerFourScore(prev => prev + wordTotal)
            setLastWordScorePlayerFour(wordTotal)
            setListOfWordsP4((prev) => [...prev, {id: "p4" + word + count, word: word, score: wordTotal}])
            break
        default:
            console.log("Error in switch")
    } 
    
    
    e.target.reset()
}

function handleStartGame(e) {
    e.preventDefault()
    for(let i = 0; i < numPlayers; i++) {
      if (e.target.form[i].value) {
        setPlayersArray(current => [...current, e.target.form[i].value])
      }
    }
    navigate('/tracker')
}    

function handleNumPlayers(e) {
    setNumPlayers(e.target.value)
}

function handlePlayAgain() {
  setPlayersArray([])
  setNumPlayers(1)
  setBestWord({})
  setPlayerOneScore(0)
  setPlayerTwoScore(0)
  setPlayerThreeScore(0)
  setPlayerFourScore(0)
  setLastWordScorePlayerOne(0)
  setLastWordScorePlayerTwo(0)
  setLastWordScorePlayerThree(0)
  setLastWordScorePlayerFour(0)
  setStats({})
  setListOfWordsP1({})
  setListOfWordsP2({})
  setListOfWordsP3({})
  setListOfWordsP4({})
}

function handleXButton(e) {
  console.log(e)
  const id = e.target.id
  const playerNum = id[0] + id[1]
  
  if (playerNum === "p1") {
    setListOfWordsP1(listOfWordsP1.filter((el) => el.id != id))
    } else if (playerNum === "p2") {
      setListOfWordsP2(listOfWordsP2.filter((el) => el.id != id))
    } else if (playerNum === "p3") {
      setListOfWordsP3(listOfWordsP3.filter((el) => el.id != id))
    } else {
      setListOfWordsP4(listOfWordsP4.filter((el) => el.id != id))
    }
  }
  


  return (

    <div className="container">
      <Header />
          <Routes>
            <Route path="/" element={<StartNewGameContent 
                                      numPlayers={numPlayers}  
                                      handleNumPlayers={handleNumPlayers} 
                                      handleStartGame={handleStartGame}
                                      />} />

            <Route path="/tracker" element={<GameContent  
                                            handlePlayAgain={handlePlayAgain}
                                            handleAddWordToScore={handleAddWordToScore}
                                            handleEndGame={handleEndGame}
                                            numPlayers={numPlayers} 
                                            playersArray={playersArray}
                                            playerOneScore={playerOneScore}
                                            playerTwoScore={playerTwoScore}
                                            playerThreeScore={playerThreeScore}
                                            playerFourScore={playerFourScore}
                                            lastWordScorePlayerOne={lastWordScorePlayerOne}
                                            lastWordScorePlayerTwo={lastWordScorePlayerTwo}
                                            lastWordScorePlayerThree={lastWordScorePlayerThree}
                                            lastWordScorePlayerFour={lastWordScorePlayerFour}
                                            />} />
            <Route path="/gameSummary" element={<EndGameContent 
                                                handlePlayAgain={handlePlayAgain}
                                                numPlayers={numPlayers}
                                                stats={stats}
                                                />} />

            <Route path="editableWordList" element={<WordLists 
                                                    numPlayers={numPlayers} 
                                                    playersArray={playersArray}
                                                    listOfWordsP1={listOfWordsP1}
                                                    listOfWordsP2={listOfWordsP2}
                                                    listOfWordsP3={listOfWordsP3}
                                                    listOfWordsP4={listOfWordsP4}
                                                    handleXButton={handleXButton}
                                                    />} />
          </Routes>
        
   
    </div>
  
  );
}

export default App;
