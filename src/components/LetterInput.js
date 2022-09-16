export default function LetterInput(props) {
    return (
        <div className="single-letter-input-div">
            <label htmlFor={props.letterId}></label>
            <input className="letter-input" id={props.letterId} type="text" maxLength="1" ></input>
            <div>
                <input className="hidden-radio" name={props.name} id={props.dLetterId} type="radio"></input> <label className="radio-label radio-label-d" htmlFor={props.dLetterId}>2x</label>
                <input className="hidden-radio" name={props.name} id={props.tLetterId} type="radio"></input> <label className="radio-label radio-label-t" htmlFor={props.tLetterId}>3x</label>
                <input className="hidden-radio" name={props.name} id={props.default} type="radio" checked></input> <label className="radio-label radio-label-default" htmlFor={props.default}>1x</label>
            </div>
        </div>
    )
}