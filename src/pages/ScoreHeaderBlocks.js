export default function ScoreHeaderBlocks(props) {
    return (
        <div className="score-info-div" id={props.id}>
            <p className="score-header-name">{props.playerName}</p>
            <p><span className="score-header-labels">Total </span>{props.playerScore}</p>
            <p><span className="score-header-labels">Last Word </span>{props.lastWordScore}</p>
    </div>
    )
}