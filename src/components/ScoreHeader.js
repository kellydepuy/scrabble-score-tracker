export default function ScoreHeader(props) {
    return (
        <div>
            <p>{props.playerOne}</p>
            <p>{props.playerOneScore}</p>
            <p>{props.lastWordScorePlayerOne}</p>

            <p>{props.playerTwo}</p>
            <p>{props.playerTwoScore}</p>
            <p>{props.lastWordScorePlayerTwo}</p>

            <p>{props.playerThree}</p>
            <p>{props.playerThreeScore}</p>
            <p>{props.lastWordScorePlayerThree}</p>

            <p>{props.playerFour}</p>
            <p>{props.playerFourScore}</p>
            <p>{props.lastWordScorePlayerFour}</p>
        </div>
    )
}