export default function LetterInput(props) {
    return (
        <div>
            <label htmlFor={props.letterId}></label>
            <input id={props.letterId} type="text"></input>
            <input id={props.dWordId} type="radio"></input> <label htmlFor={props.dWordId}></label>
            <input id={props.tWordId} type="radio"></input> <label htmlFor={props.tWordId}></label>
        </div>
    )
}