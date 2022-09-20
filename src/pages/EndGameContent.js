import { Link } from "react-router-dom"

export default function EndGameContent(props) {
    // add feature: display players from highest to lowest score
    const scores = props.stats.playerScoresArray
    const sortedScores = scores.sort(function(a, b){return a-b})
    const highestScore = sortedScores[3]

    let winner = ""
    let numOfWinner = 0
    
    for (let i = 0; i < sortedScores.length; i++) {
        if (sortedScores[i] === highestScore) {
            numOfWinner++
        }
    }

    if (numOfWinner > 1) {
        winner = "players! It's a tie!"
    } else if (props.stats.playerOne.playerOneScore === highestScore) {
        winner = props.stats.playerOne.playerOneName + '! You won!'
    } else if (props.stats.playerTwo.playerTwoScore === highestScore){
        winner = props.stats.playerTwo.playerTwoName + '! You won!'
    } else if (props.stats.playerThree.playerThreeScore === highestScore ) {
        winner = props.stats.playerThree.playerThreeName + '! You won!'
    } else {
        winner = props.stats.playerFour.playerFourName + '! You won!'
    }
    
    console.log(props.stats)
    return(
        <div className="end-game-content">
            <p className="congrats-text">Congratulations {winner}</p>
            <div className="end-game-scores-div">
                <p className="scores-text">{props.stats.playerOne.playerOneName}'s Score was {props.stats.playerOne.playerOneScore}</p>
                {props.numPlayers > 1 && <p className="scores-text">{props.stats.playerTwo.playerTwoName}'s Score was {props.stats.playerTwo.playerTwoScore}</p>}
                {props.numPlayers > 2 && <p className="scores-text">{props.stats.playerThree.playerThreeName}'s Score was {props.stats.playerThree.playerThreeScore}</p>}
                {props.numPlayers > 3 && <p className="scores-text">{props.stats.playerFour.playerFourName}'s Score was {props.stats.playerFour.playerFourScore}</p>}
            </div>
            
            <p className="scores-text">The best word was {props.stats.bestWord.bestWord} played by {props.stats.bestWord.playerName} and scored {props.stats.bestWord.bestScore} points!</p>
            <Link to="/">
                <button onClick={props.handlePlayAgain} id="play-again-button">Play Again?</button>
            </Link>
        </div>
    )
}