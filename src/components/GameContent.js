import { useState } from "react";
import DoubleTripleWordButtons from "./DoubleTripleWordButtons";
import PlayerScoreInput from "./PlayerScoreInput";
import ScoreHeader from "./ScoreHeader";

export default function GameContent(props) {
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [playerThreeScore, setPlayerThreeScore] = useState(0)
    const [playerFourScore, setPlayerFourScore] = useState(0)
    
    const [lastWordScorePlayerOne, setLastWordScorePlayerOne] = useState(0)
    const [lastWordScorePlayerTwo, setLastWordScorePlayerTwo] = useState(0)
    const [lastWordScorePlayerThree, setLastWordScorePlayerThree] = useState(0)
    const [lastWordScorePlayerFour, setLastWordScorePlayerFour] = useState(0)

    const letterValues = {
        A: 1, E: 1, I: 1, O: 1, U: 1, R: 1, S: 1, T: 1, L: 1, N: 1, D: 2, G: 2,
        B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10
    }
    function handleAddWordToScore(e) {
        e.preventDefault()
        console.log(e)
        let wordTotal = 0

        for (let i = 1; i < 33; i += 3) {
            let letter = e.target.form[i].value.toUpperCase()
            const double = e.target.form[i + 1].checked
            const triple = e.target.form[i + 2].checked
            let letterTotal = 0
    
            if (letter.length === 1) {
                if (double) {
                    letterTotal = letterValues[letter] * 2
                    wordTotal += letterTotal

                } else if (triple) {
                    letterTotal = letterValues[letter] * 3
                    wordTotal += letterTotal
                } else {
                    letterTotal = letterValues[letter]
                    wordTotal += letterTotal
                }
            }
        }

        if (e.target.form[31].checked) {
            wordTotal = wordTotal * 2
        } else if (e.target.form[32].checked) {
            wordTotal = wordTotal * 3
        }
        
        const currentPlayerIndex = e.target.form[0].options.selectedIndex

        switch (currentPlayerIndex) {
            case 0:
                setPlayerOneScore(prev => prev + wordTotal)
                setLastWordScorePlayerOne(wordTotal)
                break
            case 1:
                setPlayerTwoScore(prev => prev + wordTotal)
                setLastWordScorePlayerTwo(wordTotal)
                break
            case 2:
                setPlayerThreeScore(prev => prev + wordTotal)
                setLastWordScorePlayerThree(wordTotal)
                break
            case 3:
                setPlayerFourScore(prev => prev + wordTotal)
                setLastWordScorePlayerFour(wordTotal)
                break
            default:
                console.log("Error in switch")
        } 
    }

    return (
        <div className="game-content-container">
            <ScoreHeader
                playerOne={props.playersArray[0]}
                playerOneScore={playerOneScore}
                lastWordScorePlayerOne={lastWordScorePlayerOne}

                playerTwo={props.playersArray[1]}
                playerTwoScore={playerTwoScore}
                lastWordScorePlayerTwo={lastWordScorePlayerTwo}

                playerThree={props.playersArray[2]}
                playerThreeScore={playerThreeScore}
                lastWordScorePlayerThree={lastWordScorePlayerThree}

                playerFour={props.playersArray[3]}
                playerFourScore={playerFourScore}
                lastWordScorePlayerFour={lastWordScorePlayerFour}
            
            />
            
            <form>
                <label className="select-player-label" htmlFor="selectPlayerName">Select Player</label>
                <select className="select-player-input" name="selectPlayerName" id="selectPlayerName">
                    <option value={props.playersArray[0]}>{props.playersArray[0]}</option>
                    <option value={props.playersArray[1]}>{props.playersArray[1]}</option>
                    <option value={props.playersArray[2]}>{props.playersArray[2]}</option>
                    <option value={props.playersArray[3]}>{props.playersArray[3]}</option>
                </select>
                <PlayerScoreInput />
                <DoubleTripleWordButtons />
                <button className="add-to-score-button" onClick={handleAddWordToScore}>Add to Player's Score</button>
            </form>

        </div>
    )
}