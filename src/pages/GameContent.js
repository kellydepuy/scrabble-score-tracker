import DoubleTripleWordButtons from "./DoubleTripleWordButtons";
import PlayerScoreInput from "./PlayerScoreInput";
import ScoreHeader from "./ScoreHeader";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function GameContent(props) {

    return (
        <div className="game-content-container">
            <ScrollToTop />
            <div>
                <ScoreHeader
                    numPlayers={props.numPlayers}

                    playerOne={props.playersArray[0]}
                    playerOneScore={props.playerOneScore}
                    lastWordScorePlayerOne={props.lastWordScorePlayerOne}

                    playerTwo={props.playersArray[1]}
                    playerTwoScore={props.playerTwoScore}
                    lastWordScorePlayerTwo={props.lastWordScorePlayerTwo}

                    playerThree={props.playersArray[2]}
                    playerThreeScore={props.playerThreeScore}
                    lastWordScorePlayerThree={props.lastWordScorePlayerThree}

                    playerFour={props.playersArray[3]}
                    playerFourScore={props.playerFourScore}
                    lastWordScorePlayerFour={props.lastWordScorePlayerFour}
                />
                
                <form onSubmit={props.handleAddWordToScore} id="word-input-form">
                    <label className="select-player-label" htmlFor="selectPlayerName">Select Player</label>
                    <select className="select-player-input" name="selectPlayerName" id="selectPlayerName">
                        <option value={props.playersArray[0]}>{props.playersArray[0]}</option>
                        {props.numPlayers > 1 && <option value={props.playersArray[1]}>{props.playersArray[1]}</option>}
                        {props.numPlayers > 2 && <option value={props.playersArray[2]}>{props.playersArray[2]}</option>}
                        {props.numPlayers > 3 && <option value={props.playersArray[3]}>{props.playersArray[3]}</option>}
                    </select>
                    <PlayerScoreInput formNames={props.formNames} numPlayers={props.numPlayers}/>
                    <DoubleTripleWordButtons />
                    <button className="add-to-score-button">Add to Player's Score</button>
                </form>
                <Link to="/finalizingScore">
                    <button id="end-game-button" onClick={props.handleEndGame}>End Game</button>
                </Link>
            </div>
            
        </div>
    )
}