import FinalizedScoresPlayerBlock from "./FinalizedScoresPlayerBlock";
import { Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop";

export default function FinalizeScore(props) {
    return (
        <div className="finalize-scores-container">
            <ScrollToTop />
            <form>
                <FinalizedScoresPlayerBlock id="tiles-left-p1" name={props.playersArray[0]} numPlayers={props.numPlayers} handleFinalScore={props.handleFinalScore}/>
                {props.numPlayers > 1 && <FinalizedScoresPlayerBlock id="tiles-left-p2" name={props.playersArray[1]} numPlayers={props.numPlayers} handleFinalScore={props.handleFinalScore}/>}
                {props.numPlayers > 2 && <FinalizedScoresPlayerBlock id="tiles-left-p3" name={props.playersArray[2]} numPlayers={props.numPlayers} handleFinalScore={props.handleFinalScore}/>}
                {props.numPlayers > 3 && <FinalizedScoresPlayerBlock id="tiles-left-p4" name={props.playersArray[3]} numPlayers={props.numPlayers} handleFinalScore={props.handleFinalScore}/>}
                <Link to="/gameSummary">
                        <button onClick={props.handleFinalScore} className="calculate-final-score-button">Calculate Final Score</button>
                </Link>
            </form>
        </div>
    )
}