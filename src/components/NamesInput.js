export default function NamesInput(props) {
    return (
        <div className="names-input-container">
            <form className="names-input-form">
            <label htmlFor="p1">Player One Name</label>
            <input id="p1" type="text"></input>
                {props.numPlayers > 1 && <label htmlFor="p2" type="text">Player Two Name:</label>}
                {props.numPlayers > 1 && <input id="p2" type="text"></input>}
                {props.numPlayers > 2 && <label htmlFor="p3" type="text">Player Three Name:</label>}
                {props.numPlayers > 2 && <input id="p3" type="text"></input>}
                {props.numPlayers > 3 && <label htmlFor="p4" type="text">Player Four Name:</label>}
                {props.numPlayers > 3 && <input id="p4" type="text"></input>}
                
                <button className="start-game-button" onClick={props.handleStartGame}>Start Game!</button>
            </form>
        </div>
    )
}