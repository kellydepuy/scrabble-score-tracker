import ScoreHeaderBlocks from "./ScoreHeaderBlocks"
import { Link } from "react-router-dom"

export default function ScoreHeader(props) {
    return (
      <div id="score-header-container">
         <div className="score-header-sub-container">
               <ScoreHeaderBlocks 
                  id="score-header-p1"
                  playerName={props.playerOne}
                  playerScore={props.playerOneScore}
                  lastWordScore={props.lastWordScorePlayerOne}
               />

               {props.numPlayers > 1 && <ScoreHeaderBlocks 
                  id="score-header-p2"
                  playerName={props.playerTwo}
                  playerScore={props.playerTwoScore}
                  lastWordScore={props.lastWordScorePlayerTwo}
            />}

               {props.numPlayers > 2 && <ScoreHeaderBlocks 
                  id="score-header-p3"
                  playerName={props.playerThree}
                  playerScore={props.playerThreeScore}
                  lastWordScore={props.lastWordScorePlayerThree}
               />}

               {props.numPlayers > 3 && <ScoreHeaderBlocks 
                  id="score-header-p4"
                  playerName={props.playerFour}
                  playerScore={props.playerFourScore}
                  lastWordScore={props.lastWordScorePlayerFour}
               />}
         </div>
            <div className="link-div">
               <Link id="linkToWordList" to="/editableWordList">View/Remove Words</Link>
            </div>
       
    </div> 
    )
}