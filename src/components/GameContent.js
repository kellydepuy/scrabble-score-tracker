import LetterInput from "./LetterInput";

export default function GameContent(props) {
    return (
        <div>
            <label htmlFor="selectPlayerName">Select Player</label>
            <select name="selectPlayerName" id="selectPlayerName">
                <option value={props.playerOne}></option>
                <option value={props.playerTwo}></option>
                <option value={props.playerThree}></option>
                <option value={props.playerFour}></option>
            </select>

        </div>
    )
}