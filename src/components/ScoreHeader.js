export default function ScoreHeader(props) {
    return (
        <div id="score-header-container">
            <div className="score-info-div" id="score-header-p1">
                <p className="score-header-name">{props.playerOne}</p>
                <p><span className="score-header-labels">Total </span>{props.playerOneScore}</p>
                <p><span className="score-header-labels">Last Word </span>{props.lastWordScorePlayerOne}</p>
            </div>
            <div className="score-info-div" id="score-header-p2">
                <p className="score-header-name">{props.playerTwo}</p>
                <p><span className="score-header-labels">Total </span>{props.playerTwoScore}</p>
                <p><span className="score-header-labels">Last Word </span>{props.lastWordScorePlayerTwo}</p>
            </div>
            <div className="score-info-div" id="score-header-p3">
                <p className="score-header-name">{props.playerThree}</p>
                <p><span className="score-header-labels">Total </span>{props.playerThreeScore}</p>
                <p><span className="score-header-labels">Last Word </span>{props.lastWordScorePlayerThree}</p>
            </div>
            <div className="score-info-div" id="score-header-p4">
                <p className="score-header-name">{props.playerFour}</p>
                <p><span className="score-header-labels">Total </span>{props.playerFourScore}</p>
                <p><span className="score-header-labels">Last Word </span>{props.lastWordScorePlayerFour}</p>
            </div>
        </div>
    )
}