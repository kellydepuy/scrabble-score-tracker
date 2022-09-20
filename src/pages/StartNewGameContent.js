import { useState } from "react";
import NamesInput from "./NamesInput";


export default function StartNewGameContent(props) {


    return (
        <div className="start-new-game-container">
            <h2>Start a New Game</h2>
            <label htmlFor="input-num-players">Number of Players</label>
            <input onChange={props.handleNumPlayers} min="1" max="4" id="input-num-players" type="number"></input>
            <NamesInput numPlayers={props.numPlayers} handleStartGame={props.handleStartGame}/>
        </div>
    )


}