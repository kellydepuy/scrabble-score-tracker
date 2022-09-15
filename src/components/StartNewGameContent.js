import { useState } from "react";
import NamesInput from "./NamesInput";


export default function StartNewGameContent(props) {
    const [numPlayers, setNumPlayers] = useState(1)
    

    function handleNumPlayers(e) {
        setNumPlayers(e.target.value)
    }


    return (
        <div>
            <h2>Want to start a new game?</h2>
            <label htmlFor="input-num-players">How many people are playing?</label>
            <input onChange={handleNumPlayers} min="2" max="4" id="input-num-players" type="number"></input>
            <NamesInput numPlayers={numPlayers} handleStartGame={props.handleStartGame}/>
        </div>
    )


}