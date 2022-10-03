import NamesInput from "./NamesInput";
import ScrollToTop from "./ScrollToTop";

export default function StartNewGameContent(props) {
    return (
        <div className="start-new-game-container">
            <ScrollToTop />
            <h2>Start a New Game</h2>
            <label htmlFor="input-num-players">Number of Players</label>
            <input className="name-input" onChange={props.handleNumPlayers} min="1" max="4" id="input-num-players" type="number"></input>
            <NamesInput numPlayers={props.numPlayers} handleStartGame={props.handleStartGame}/>
        </div>
    )


}