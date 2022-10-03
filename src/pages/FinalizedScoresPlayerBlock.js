import { useState } from "react"

export default function FinalizedScoresPlayerBlock(props) {

    const [numLeftOver, setNumLeftOver] = useState()

    return (
        <div className="final-score-player-block">
            <p className="player-name">{props.name}</p>
            <div className="tiles-left">
                <label htmlFor={props.id}>How many tiles does {props.name} have left?</label>
                <input defaultValue="0" id={props.id} onChange={(e) => setNumLeftOver(e.target.value)} type="number" min="0" max="7" />
            </div>
            <div className="final-letters-form">
                <div className="which-letters-title-div">
                    <p>Which letters?</p>
                </div>
                <div className="which-letters-div">
                    {numLeftOver > 0 && <input className="letter" type="text" maxLength={1}/>}
                    {numLeftOver > 1 && <input className="letter" type="text" maxLength={1}/>}
                    {numLeftOver > 2 && <input className="letter" type="text" maxLength={1}/>}
                    {numLeftOver > 3 && <input className="letter" type="text" maxLength={1}/>}
                    {numLeftOver > 4 && <input className="letter" type="text" maxLength={1}/>}
                    {numLeftOver > 5 && <input className="letter" type="text" maxLength={1}/>}
                    {numLeftOver > 6 && <input className="letter" type="text" maxLength={1}/>}
                </div>
            </div>
            
        </div>
    )
}