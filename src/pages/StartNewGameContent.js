import NamesInput from "./NamesInput";
import ScrollToTop from "./ScrollToTop";
import { Link } from "react-router-dom";

export default function StartNewGameContent(props) {
    return (
        <div className="start-new-game-container">
            <ScrollToTop />
            <h2>Start a New Game</h2>
            <label htmlFor="input-num-players">Number of Players</label>
            <input className="name-input" onChange={props.handleNumPlayers} min="1" max="4" id="input-num-players" type="number"></input>
            <NamesInput numPlayers={props.numPlayers} handleStartGame={props.handleStartGame}/>
            <Link to='/playersStats' className="little-button">Win/Loss Records</Link>
        </div>
    )


}