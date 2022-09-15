export default function LetterInput(props) {
    return (
        <div>
            <label htmlFor={props.letterId}></label>
            <input id={props.letterId} type="text" maxLength="1" ></input>
            <input name={props.name} id={props.dLetterId} type="radio"></input> <label htmlFor={props.dLetterId}></label>
            <input name={props.name} id={props.tLetterId} type="radio"></input> <label htmlFor={props.tLetterId}></label>
        </div>
    )
}