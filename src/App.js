import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./pages/Header";
import StartNewGameContent from "./pages/StartNewGameContent";
import GameContent from "./pages/GameContent";
import EndGameContent from "./pages/EndGameContent";
import WordLists from "./pages/WordLists";
import FinalizeScore from "./pages/FinalizeScores";
import ScrollToTop from "./pages/ScrollToTop";


function App() {
  const navigate = useNavigate()
  const [playersArray, setPlayersArray] = useState([])
  const [count, setCount] = useState(0)
  const [numPlayers, setNumPlayers] = useState(1)
  const [bestWord, setBestWord] = useState({bestWord: "", playerName: "", bestScore: 0})
  const [stats, setStats] = useState()
// I considered creating objects in state to hold this data, but I appreciate the clarity of this solution.
  const [playerOneScore, setPlayerOneScore] = useState(0)
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  const [playerThreeScore, setPlayerThreeScore] = useState(0)
  const [playerFourScore, setPlayerFourScore] = useState(0)
  
  const [lastWordScorePlayerOne, setLastWordScorePlayerOne] = useState(0)
  const [lastWordScorePlayerTwo, setLastWordScorePlayerTwo] = useState(0)
  const [lastWordScorePlayerThree, setLastWordScorePlayerThree] = useState(0)
  const [lastWordScorePlayerFour, setLastWordScorePlayerFour] = useState(0)

  const [listOfWordsP1, setListOfWordsP1] = useState([])
  const [listOfWordsP2, setListOfWordsP2] = useState([])
  const [listOfWordsP3, setListOfWordsP3] = useState([])
  const [listOfWordsP4, setListOfWordsP4] = useState([])

  const letterValues = {
    A: 1, E: 1, I: 1, O: 1, U: 1, R: 1, S: 1, T: 1, L: 1, N: 1, D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10
}
// useEffect necessary to ensure stats are set at the appropriate times due to async of setState
useEffect(() =>  setStats({
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
}), [playerOneScore, playerTwoScore, playerThreeScore, playerFourScore, bestWord, playersArray])

// This large function handles all the tasks that must happen when the add word button is clicked.
function handleAddWordToScore(e) {
    e.preventDefault()
    
    const currentPlayerIndex = e.target[0].options.selectedIndex
    const currentPlayer = playersArray[currentPlayerIndex]
    let wordTotal = 0
    let word = ""

    window.scrollTo(0, 0)
    // Count is used to set ids and is incremented for each word
    setCount(prev => prev + 1)

    // This for loop calculates the base score of the word.
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
// The next 2 if statements calculate words core with double or triple word added
    if (e.target[41].value) {
        const multiplier1 = e.target[41].value * 2
        wordTotal = wordTotal * multiplier1
    }
    
    if (e.target[42].value) {
        const multiplier2 = e.target[42].value * 3
        wordTotal = wordTotal * multiplier2
    }
// This if statement changes the best word if the new word scores higher than the previous best word.
    if(wordTotal > bestWord.bestScore) {
        setBestWord({bestWord: word, playerName: currentPlayer, bestScore: wordTotal})
    }
// switch updates player score, last word, and word list depending on which player was selected
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

//updates players array with player names for use throughout app
function handleStartGame(e) {
    e.preventDefault()
    for(let i = 0; i < numPlayers; i++) {
      if (e.target.form[i].value) {
        setPlayersArray(current => [...current, e.target.form[i].value])
      }
    }
    navigate('/tracker')
}

// sets the number of players for use throughout app
function handleNumPlayers(e) {
    setNumPlayers(e.target.value)
}

// resets state for the next round of scrabble
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
  setListOfWordsP1([])
  setListOfWordsP2([])
  setListOfWordsP3([])
  setListOfWordsP4([])
}

// removes word when x button is clicked on the word list page
function handleXButton(e) {
  const id = e.target.id
  const playerNum = id[0] + id[1]
  let removedScore = 0

  
  if (playerNum === "p1") {
    for (let i = 0; i < listOfWordsP1.length; i++) {
      if (listOfWordsP1[i].id === id) {
        removedScore = listOfWordsP1[i].score
      }
    }
    setPlayerOneScore(playerOneScore - removedScore)
    setListOfWordsP1(listOfWordsP1.filter((el) => el.id !== id))
    
    } else if (playerNum === "p2") {
      for (let i = 0; i < listOfWordsP2.length; i++) {
        if (listOfWordsP2[i].id === id) {
          removedScore = listOfWordsP2[i].score
        }
      }
      setPlayerTwoScore(playerTwoScore - removedScore)
      setListOfWordsP2(listOfWordsP2.filter((el) => el.id !== id))
      
    } else if (playerNum === "p3") {
      for (let i = 0; i < listOfWordsP3.length; i++) {
        if (listOfWordsP3[i].id === id) {
          removedScore = listOfWordsP3[i].score
        }
      }
      setPlayerThreeScore(playerThreeScore - removedScore)
      setListOfWordsP3(listOfWordsP4.filter((el) => el.id !== id))
    } else {
      for (let i = 0; i < listOfWordsP4.length; i++) {
        if (listOfWordsP1[i].id === id) {
          removedScore = listOfWordsP4[i].score
        }
      }
      setPlayerFourScore(playerFourScore - removedScore)
      setListOfWordsP4(listOfWordsP4.filter((el) => el.id !== id))
    }
  }
  
  // This function calculates the final score based on official rules
function handleFinalScore(e) {
  let addP1 = 0
  let subP1 = 0

  let addP2 = 0
  let subP2 = 0

  let addP3 = 0
  let subP3 = 0

  let addP4 = 0
  let subP4 = 0

  const inputBase = e.target.form
  const tilesLeftP1 = Number(inputBase[0].value)
  let p2Idx = null
  let tilesLeftP2 = null 
  let p3Idx = null 
  let tilesLeftP3 = null
  let p4Idx = null
  let tilesLeftP4 = null

  //this set of for loops and if statements determines how many points should be removed from players scores
  // I would like to find a better way to access the data than the synthetic event.
    for (let i = 1; i < tilesLeftP1 + 1; i++) {
      const letterChar = inputBase[i].value.toUpperCase()
      const letterValue = letterValues[letterChar]
      subP1 += letterValue
    }

    if (numPlayers > 1) {
      p2Idx = tilesLeftP1 + 1
      tilesLeftP2 = Number(inputBase[p2Idx].value)
      for (let i = tilesLeftP1 + 2; i < tilesLeftP1 + tilesLeftP2 + 2; i++) {
        const letterChar = inputBase[i].value.toUpperCase()
        const letterValue = letterValues[letterChar]
        subP2 += letterValue
    }}
    if (numPlayers > 2) {
      p3Idx = tilesLeftP1 + tilesLeftP2 + 2
      tilesLeftP3 = Number(inputBase[p3Idx].value)
      for (let i = tilesLeftP1 + tilesLeftP2 + 3; i < tilesLeftP1 + tilesLeftP2 + tilesLeftP3 + 3; i++) {
        const letterChar = inputBase[i].value.toUpperCase()
        const letterValue = letterValues[letterChar]
        subP3 += letterValue
    }}
    if (numPlayers > 3) {
      p4Idx = tilesLeftP1 + tilesLeftP2 + tilesLeftP3 + 3
      tilesLeftP4 = Number(inputBase[p4Idx].value)
      for (let i = tilesLeftP1 + tilesLeftP2 + tilesLeftP3 + 4; i < tilesLeftP1 + tilesLeftP2 + tilesLeftP3 + tilesLeftP4 + 4; i++) {
        const letterChar = inputBase[i].value.toUpperCase()
        const letterValue = letterValues[letterChar]
        subP4 += letterValue
    }}
// determines how many, if any, points should be added to a players score
    if (tilesLeftP1=== 0) {
      addP1 += 50 + subP2 + subP3 + subP4
    }

    if (numPlayers > 1 && tilesLeftP2 === 0) {
      addP2 += 50 + subP1 + subP3 + subP4
    }

    if (numPlayers > 2 && tilesLeftP3 === 0) {
      addP3 += 50 + subP2 + subP1 + subP4
    }

    if (numPlayers > 3 && tilesLeftP4 === 0) {
      addP4 += 50 + subP2 + subP3 + subP1
    }
// sets the players score based on above calculations
    setPlayerOneScore(prev => prev - subP1 + addP1)
    setPlayerTwoScore(prev => prev - subP2 + addP2)
    setPlayerThreeScore(prev => prev - subP3 + addP3)
    setPlayerFourScore(prev => prev - subP4 + addP4)

}

  return (

    <div className="container">
      <ScrollToTop/>
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
            <Route path="finalizingScore" element={<FinalizeScore
                                                      playersArray={playersArray} 
                                                      numPlayers={numPlayers}
                                                      handleFinalScore={handleFinalScore}
                                                    />} />                                      
          </Routes>
   
    </div>
  
  );
}

export default App;
